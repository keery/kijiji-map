import { useQuery, UseQueryOptions } from 'react-query'
import { getAds } from '~api/requests'
import { SearchOptions, SearchParameters, Ad } from 'kijiji-scraper'

export const useAds = (
  params?: SearchParameters,
  searchOptions?: SearchOptions,
  queryOptions?: UseQueryOptions<Ad[]>,
) => {
  return useQuery(
    'ads',
    () => getAds(params).then((res) => res.data),

    queryOptions,
  )
}
