import { useQuery } from 'react-query'
import { client } from '~api/api'
import { Ad } from '~@types/api'

export const getAds = ({ _page, ...params }) =>
  client.get('/search', {
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
      .then((res) => {
        // Ads are checked after they got fetched, and wrong ones are set to null
        const nbAds: number = res.ads.length
        const validAds: Ad[] = res.ads.filter((ad) => ad)
        return {
          ads: validAds,
          count: res.count - (nbAds - validAds.length),
        }
      })
      .catch((err) => {
        console.log(err)
        return { ads: [] as Ad[], count: 0 }
      }),
  )
}
