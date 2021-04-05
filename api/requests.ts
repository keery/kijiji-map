import { client } from '~api/api'
import { SearchParameters } from 'kijiji-scraper'

export const getAds = (params: SearchParameters) => client.get('/ads')
