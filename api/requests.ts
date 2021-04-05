import { client } from '~api/api'

export const getAds = (params) =>
  client.get('/ads', {
    params: {
      _sort: 'date:desc',
      ...params,
    },
  })
export const getAdsCount = () => client.get('/ads/count')
