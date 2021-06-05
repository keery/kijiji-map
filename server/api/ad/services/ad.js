"use strict";
const { search, categories } = require("kijiji-scraper");
const mbxClient = require("@mapbox/mapbox-sdk");
const adSettings = require("../models/ad.settings.json");
const geocodingService = require("@mapbox/mapbox-sdk/services/geocoding");
const baseClient = mbxClient({
  accessToken: process.env.MAPBOX_PUBLIC_TOKEN,
});
const geocoder = geocodingService(baseClient);

const DEFAULT_OPTIONS = {
  maxResults: 40,
};

const DEFAULT_PARAMS = {
  adType: "OFFERED",
  locationId: 0,
  categoryId: categories.REAL_ESTATE.FOR_RENT.LONG_TERM_RENTALS,
  sortType: "DATE_DESCENDING",
};

const NOT_AVAILABLE = "Not Available";

module.exports = {
  async getLocationContext(name, data) {
    try {
      const entity = await strapi.services[name].findOne({
        external_id: data.external_id,
      });
      if (entity) {
        return entity.id;
      } else {
        const newEntity = await strapi.services[name].create(data);
        return newEntity.id;
      }
    } catch (err) {
      console.log("[ERROR] In function getLocationContext", err.data);
      return null;
    }
  },
  async getLocationDetails(results = []) {
    if (!results || results.length === 0) {
      console.log(`[NO GEOLOC] GPS coordinates not found ${ad.url}`);
      return null;
    }
    const result = results[0];
    const context = {
      postcode: null,
      neighborhood: null,
      city: null,
      region: null,
      country: null,
    };

    const location = {
      latitude: result.geometry.coordinates[0],
      longitude: result.geometry.coordinates[1],
    };

    if (result.context && result.context.length > 0) {
      result.context.map(({ id, text, short_code }) => {
        const splittedId = id.split(".");
        const type = splittedId[0];
        const external_id = splittedId[1];

        // Loop on context in order to know what information I have and be able to link them together like Country > City > Neighborhood
        switch (type) {
          case "postcode":
            location["postcode"] = text;
            break;
          case "neighborhood":
            context["neighborhood"] = {
              external_id,
              name: text,
            };
            break;
          case "place":
            context["city"] = {
              external_id,
              name: text,
            };
            break;
          case "region":
            context["region"] = {
              external_id,
              name: text,
              shortcode: short_code,
            };
            break;
          case "country":
            context["country"] = {
              external_id,
              name: text,
              shortcode: short_code,
            };
            break;
        }
      });

      if (context.country) {
        const id = await strapi.services.ad.getLocationContext(
          "country",
          context.country
        );
        if (id) {
          location["country"] = id;
          if (context.region) {
            context.region["country"] = id;
          }
        }
      }
      if (context.region) {
        const id = await strapi.services.ad.getLocationContext(
          "region",
          context.region
        );
        if (id) {
          location["region"] = id;
          if (context.city) {
            context.city["region"] = id;
          }
        }
      }
      if (context.city) {
        const id = await strapi.services.ad.getLocationContext(
          "city",
          context.city
        );
        if (id) {
          location["city"] = id;
          if (context.neighborhood) {
            context.neighborhood["city"] = id;
          }
        }
      }
      if (context.neighborhood) {
        const id = await strapi.services.ad.getLocationContext(
          "neighborhood",
          context.neighborhood
        );
        if (id) {
          location["neighborhood"] = id;
        }
      }
    }

    return location;
  },
  scrape: async (ctx) => {
    return search(DEFAULT_PARAMS, DEFAULT_OPTIONS)
      .then(async (ads) => {
        if (ads.length === 0) {
          throw new Error("No ad found from scrapper");
        }

        for (let i = 0; i < ads.length; i++) {
          try {
            const { attributes, ...ad } = ads[i];

            const isExists = await strapi.query("ad").findOne({ url: ad.url });
            if (isExists) {
              console.log(`[EXISTS] ${ad.url}`);
              continue;
            }

            const geolocation = await geocoder
              .forwardGeocode({
                query: attributes.location,
                limit: 1,
                countries: ["ca"],
              })
              .send()
              .then(async (response) => {
                const location = await strapi.services.ad.getLocationDetails(
                  response.body.features
                );

                if (!location) {
                  return null;
                }

                return {
                  location,
                  transformedAttributes: Object.fromEntries(
                    Object.entries(attributes).map(([key, value]) => {
                      let newValue = value;
                      if (value === NOT_AVAILABLE) newValue = false;
                      else if (
                        adSettings.attributes[key] &&
                        adSettings.attributes[key].type === "boolean"
                      )
                        newValue = Boolean(value);
                      return [key, newValue];
                    })
                  ),
                };
              })
              .catch((err) => {
                console.log("[ERROR-GEOCODING]", err);
                return null;
              });

            if (!geolocation) continue;
            const { transformedAttributes, location } = geolocation;

            await strapi
              .query("ad")
              .create({
                ...ad,
                ...transformedAttributes,
                ...location,
              })
              .then(() => console.log(`[INSERTED] ${ad.url}`))
              .catch((err) => console.log(`[ERROR-CREATE-AD] ${ad.url}`, err));
          } catch (err) {
            console.log("[ERROR-SCRAPPER]", err);
          }
        }
      })
      .catch((err) => console.error(err));
  },
};
