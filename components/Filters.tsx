import React, { useState } from 'react'
import { HStack, Button } from '@chakra-ui/react'
import FilterPrice from '~components/Price/FilterPrice'
import { getAds } from '~api/requests'
import FilterLocation from '~components/FilterLocation'
import FilterSize from '~components/FilterSize'
import { LOCAL_STORAGE_SEARCH } from '~constants'
import { getDefaultValue } from '~utils/filters'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import Search from 'public/assets/img/search.svg'
import { useQueryClient } from 'react-query'
import { SearchParameters } from 'kijiji-scraper'

const Filters = () => {
  const [isLoading, setLoading] = useState(false)
  const queryClient = useQueryClient()
  const { t } = useTranslation('common')
  const form = useForm({
    defaultValues: getDefaultValue(),
  })

  const onSubmit = async (data) => {
    localStorage.setItem(LOCAL_STORAGE_SEARCH, JSON.stringify(data))
    const params: SearchParameters = {
      // locationId: data.location,
      minPrice: data.min,
      maxPrice: data.max,
    }
    setLoading(true)
    await queryClient
      .fetchQuery('search', () => getAds(params).then((res) => res.data))
      .finally(() => setLoading(false))
  }

  return (
    <FormProvider {...form}>
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
    </FormProvider>
  )
}

export default Filters
