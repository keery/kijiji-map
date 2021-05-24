import React from 'react'
import { HStack, Button } from '@chakra-ui/react'
import FilterPrice from '~components/Price/FilterPrice'
import FilterLocation from '~components/FilterLocation'
import FilterSize from '~components/FilterSize'
import { LOCAL_STORAGE_SEARCH } from '~constants'
import { getSize } from '~utils/filters'
import { useTranslation } from 'next-i18next'
import Search from 'public/assets/img/search.svg'
import { useFormContext } from 'react-hook-form'
import { PER_PAGE } from '~constants'

interface Props {
  setQuery: (page: any) => void
  isLoading: boolean
}

const Filters = ({ setQuery, isLoading }: Props) => {
  const form = useFormContext()
  const { t } = useTranslation('common')
  const onSubmit = async (data) => {
    localStorage.setItem(LOCAL_STORAGE_SEARCH, JSON.stringify(data))

    setQuery({
      ...getSize(data.size),
      price_gte: data.min,
      price_lte: data.max,
      _page: 0,
      _limit: PER_PAGE,
      // locationId: data.location,
    })
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <HStack spacing={4} backgroundColor="white" display="inline-flex">
        <FilterLocation control={form.control} />
        <FilterPrice />
        <FilterSize />
        <Button
          leftIcon={<Search fontSize="20px" />}
          size="lg"
          fontSize="sm"
          type="submit"
          isLoading={isLoading}
          loadingText={t('filters.searching')}
        >
          {t('filters.submit')}
        </Button>
      </HStack>
    </form>
  )
}

export default Filters
