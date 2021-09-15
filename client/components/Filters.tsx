import React, { useCallback } from 'react'
import { HStack, Button, useBreakpointValue } from '@chakra-ui/react'
import FilterPrice from '~components/Price/FilterPrice'
import FilterLocation from '~components/FilterLocation'
import FilterSize from '~components/FilterSize'
import FiltersDrawer from '~components/FiltersDrawer'
import { formatQuery } from '~utils/filters'
import { useTranslation } from 'next-i18next'
import Search from 'public/assets/img/search.svg'
import { useFormContext } from 'react-hook-form'
import { getDefaultValue } from '~utils/filters'
interface Props {
  setQuery: (page: any) => void
  isLoading: boolean
}

const Filters = ({ setQuery, isLoading }: Props) => {
  const isMobile = useBreakpointValue({ base: true, lg: false })
  const form = useFormContext()
  const { t } = useTranslation()

  const onSubmit = useCallback((data) => {
    const filters = { ...data }

    if (filters?.location?.value) {
      delete filters.bounds
      form.setValue('bounds', null)
    }

    setQuery(formatQuery(filters))
  }, [])

  return (
    <>
      {isMobile ? (
        <FiltersDrawer
          isLoading={isLoading}
          onSubmit={form.handleSubmit(onSubmit)}
        />
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <HStack spacing={4} backgroundColor="white" display="inline-flex">
            <FilterLocation />
            <FilterPrice />
            <FilterSize name="bedrooms" />
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
      )}
    </>
  )
}

export default Filters
