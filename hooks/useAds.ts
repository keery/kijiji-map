import { useQuery, UseQueryOptions } from 'react-query'
import { getAds } from '~api/requests'

export const useAds = (params?: { _limit: number; _page: number }) => {
  return useQuery(['ads', params._page], () =>
    getAds({
      _limit: params._limit,
      _start: params._page * params._limit,
    }).then((res) => res.data),
  )
}
