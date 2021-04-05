'use strict'
const { search, categories } = require('kijiji-scraper')
const mbxClient = require('@mapbox/mapbox-sdk')
const adSettings = require('../models/ad.settings.json')
const geocodingService = require('@mapbox/mapbox-sdk/services/geocoding')
const baseClient = mbxClient({
  accessToken: process.env.MAPBOX_PUBLIC_TOKEN,
})
const geocoder = geocodingService(baseClient)

const DEFAULT_OPTIONS = {
  maxResults: 1000,
}

const DEFAULT_PARAMS = {
  adType: 'OFFERED',
  locationId: 0,
  categoryId: categories.REAL_ESTATE.FOR_RENT.LONG_TERM_RENTALS,
  sortType: 'DATE_DESCENDING',
}

const NOT_AVAILABLE = 'Not Available'

module.exports = {
  scrape: async (ctx) => {
    const ads = await search(DEFAULT_PARAMS, DEFAULT_OPTIONS).catch((err) =>
      console.error(err),
    )

    if (ads.length === 0) {
      console.log('No ad founf from scrapper')
      return
    }

    return Promise.all(
      ads.map(async ({ attributes, ...ad }) => {
        const isExists = await strapi.query('ad').findOne({ url: ad.url })
        if (isExists) {
          console.log(`[EXISTS] ${ad.url}`)
          return null
        }

        return geocoder
          .forwardGeocode({
            query: attributes.location,
            limit: 1,
            countries: ['ca'],
          })
          .send()
          .then((response) => {
            if (response.body.features.length === 0) {
              console.log(`[NO GEOLOC] GPS coordinates not found ${ad.url}`)
              return null
            }

            const transformedAttributes = Object.fromEntries(
              Object.entries(attributes).map(([key, value]) => {
                let newValue = value
                if (value === NOT_AVAILABLE) newValue = false
                else if (
                  adSettings.attributes[key] &&
                  adSettings.attributes[key].type === 'boolean'
                )
                  newValue = Boolean(value)
                return [key, newValue]
              }),
            )

            return strapi
              .query('ad')
              .create({
                ...ad,
                ...transformedAttributes,
                latitude: response.body.features[0].geometry.coordinates[0],
                longitude: response.body.features[0].geometry.coordinates[1],
              })
              .then(() => console.log(`[INSERTED] ${ad.url}`))
              .catch((err) => console.log(`[ERROR-CREATE-AD] ${ad.url}`, err))
          })
      }),
    ).catch((err) => {
      console.log('[ERROR-SCRAPPER]', err)
      return err
    })
  },
}
