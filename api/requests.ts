import { client } from '~api/api'
import { SearchParameters, Ad } from 'kijiji-scraper'

export const search = (params: SearchParameters) =>
  client.post<Ad[]>('/api/search', params)
