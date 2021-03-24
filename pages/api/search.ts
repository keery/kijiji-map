import { NextApiRequest, NextApiResponse } from 'next'
import { search, categories } from 'kijiji-scraper'
import mbxClient from '@mapbox/mapbox-sdk'
import geocodingService from '@mapbox/mapbox-sdk/services/geocoding'

const testOptions = {
  maxResults: 10,
}

const testParams = {
  locationId: 1700281,
  categoryId: categories.REAL_ESTATE.FOR_RENT.LONG_TERM_RENTALS, // Same as kijiji.categories.CARS_AND_VEHICLES
  sortByName: 'priceAsc', // Show the cheapest listings first
}

const postalCode = {
  NL: ['A'],
  NS: ['B'],
  PE: ['C'],
  NB: ['E'],
  QC: ['G', 'H', 'J'],
  ON: ['K', 'L', 'M', 'N', 'P'],
  MB: ['R'],
  SK: ['S'],
  AB: ['T'],
  BC: ['V'],
  NU: ['X'],
  NT: ['X'],
  YT: ['Y'],
}

const matchingPostalCode = {
  A: 'NL',
  B: 'NS',
  C: 'PE',
  E: 'NB',
  G: 'QC',
  H: 'QC',
  J: 'QC',
  K: 'ON',
  L: 'ON',
  M: 'ON',
  N: 'ON',
  P: 'ON',
  R: 'MB',
  S: 'SK',
  T: 'AB',
  V: 'BC',
  X: 'NU',
  Y: 'YT',
}

const baseClient = mbxClient({ accessToken: process.env.MAPBOX_PUBLIC_TOKEN })
const geocoder = geocodingService(baseClient)
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await search(testParams, testOptions).catch((err) =>
    console.error(err),
  )

  if (!result || result.length === 0) {
    return res.status(200).json(result)
  }

  const adsWithCoordinates = await Promise.all(
    result.map((ad) =>
      geocoder
        .forwardGeocode({
          query: ad.attributes.location,
          // query: '6645 Rue de Terrebonne, Montréal, QC, H4B 1B5',
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
