import { client } from '~api/api'

export const getAdsCount = () => client.get('/ads/count')
