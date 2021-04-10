import { useQuery } from 'react-query'
import { client } from '~api/api'

export const getAdsCount = (params) => client.get('/ads/count', { params })

export const useAdsCount = ({ _page, ...params }) => {
  return useQuery(['adsCount', params], () =>
    getAdsCount(params).then((res) => res.data),
  )
}
