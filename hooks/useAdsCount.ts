import { useQuery } from 'react-query'
import { getAdsCount } from '~api/requests'

export const useAdsCount = () => {
  return useQuery('adsCount', () => getAdsCount().then((res) => res.data))
}
