import { useQuery } from 'react-query'
import { client } from '~api/api'

export const getAds = ({ _page, ...params }) =>
  client.get('/ads', {
    params: {
      ...params,
      _sort: 'date:desc',
      _start: _page * params._limit,
    },
  })

export const useAds = (params) => {
  return useQuery(['ads', params], () =>
    getAds(params)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err)
        return []
      }),
  )
}
