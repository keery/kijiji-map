import { useQuery, UseQueryOptions } from 'react-query'
import { search } from '~api/requests'
import { SearchOptions, SearchParameters, Ad } from 'kijiji-scraper'

export const useSearch = (
  params?: SearchParameters,
  searchOptions?: SearchOptions,
  queryOptions?: UseQueryOptions<Ad[]>,
) => {
  return useQuery(
    'search',
    () => search(params).then((res) => res.data),

    queryOptions,
  )
}
