import React, { useCallback } from 'react'
import { HStack, Button } from '@chakra-ui/react'
import FilterPrice from '~components/Price/FilterPrice'
import FilterLocation from '~components/FilterLocation'
import FilterSize from '~components/FilterSize'
import { formatQuery } from '~utils/filters'
import { useTranslation } from 'next-i18next'
import Search from 'public/assets/img/search.svg'
import { useFormContext } from 'react-hook-form'

interface Props {
  setQuery: (page: any) => void
  isLoading: boolean
}

const Filters = ({ setQuery, isLoading }: Props) => {
  const form = useFormContext()
  const { t } = useTranslation('common')

  const onSubmit = useCallback((data) => {
    const filters = { ...data }

    if (filters?.location?.value) {
      delete filters.bounds
      form.setValue('bounds', null)
    }

    setQuery(formatQuery(filters))
  }, [])

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <HStack spacing={4} backgroundColor="white" display="inline-flex">
        <FilterLocation />
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
