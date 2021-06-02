"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const sortByName = (array) =>
  array.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0; //default return value (no sorting)
  });

module.exports = {
  async getLocations(ctx) {
    const result = await strapi
      .query("country")
      .find({}, ["regions", "regions.cities", "regions.cities.neighborhoods"]);

    if (!result || result.lenght === 0) return [];

    return result.reduce((total, country) => {
      total.push({
        type: "country",
        value: `country.${country.id}`,
        label: country.name,
      });

      if (country.regions && country.regions.length > 0) {
        sortByName(country.regions).map((region) => {
          total.push({
            type: "region",
            value: `region.${region.id}`,
            label: `${region.name}, ${region.shortcode
              .toLowerCase()
              .replace(country.shortcode + "-", "")
              .toUpperCase()}`,
          });

          if (region.cities && region.cities.length > 0) {
            sortByName(region.cities).map((city) => {
              total.push({
                type: "city",
                value: `city.${city.id}`,
                label: city.name,
              });

              if (city.neighborhoods && city.neighborhoods.length > 0) {
                sortByName(city.neighborhoods).map((neighborhood) => {
                  total.push({
                    type: "neighborhood",
                    value: `neighborhood.${neighborhood.id}`,
                    label: `${neighborhood.name}, ${city.name}`,
                  });
                });
              }
            });
          }
        });
      }
      return total;
    }, []);
  },
};
