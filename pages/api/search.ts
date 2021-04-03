import { NextApiRequest, NextApiResponse } from 'next'
import {
  search,
  categories,
  ScraperOptions,
  SearchParameters,
} from 'kijiji-scraper'
import mbxClient from '@mapbox/mapbox-sdk'
import geocodingService from '@mapbox/mapbox-sdk/services/geocoding'

interface IOptions extends ScraperOptions {
  maxResults?: number
  minResults?: number
}

const DEFAULT_OPTIONS: IOptions = {
  maxResults: 10,
}

const DEFAULT_PARAMS: SearchParameters = {
  adType: 'OFFERED',
  locationId: 1700281,
  categoryId: categories.REAL_ESTATE.FOR_RENT.LONG_TERM_RENTALS,
  sortByName: 'priceAsc',
}

const baseClient = mbxClient({ accessToken: process.env.MAPBOX_PUBLIC_TOKEN })
const geocoder = geocodingService(baseClient)
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await search(
    { ...DEFAULT_PARAMS, ...req.body },
    DEFAULT_OPTIONS,
  ).catch((err) => console.error(err))

  if (!result || result.length === 0) {
    return res.status(200).json(result)
  }

  const adsWithCoordinates = await Promise.all(
    result.map((ad) =>
      geocoder
        .forwardGeocode({
          query: ad.attributes.location,
          limit: 1,
          countries: ['ca'],
        })
        .send()
        .then((response) => {
          if (response.body.features.length === 0) return ad

          return {
            ...ad,
            attributes: {
              ...ad.attributes,
              coordinates: response.body.features[0].geometry.coordinates,
            },
          }
        }),
    ),
  )
  return res.status(200).json(adsWithCoordinates)
}
