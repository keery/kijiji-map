import React from 'react'
import { HStack, Button } from '@chakra-ui/react'
import FilterPrice from '~components/Price/FilterPrice'
import FilterLocation from '~components/FilterLocation'
import FilterSize from '~components/FilterSize'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import Search from 'public/assets/img/search.svg'

const Filters = () => {
  const { t } = useTranslation('common')
  const form = useForm({
    defaultValues: {
      min: 0,
      max: 10000,
    },
  })

  return (
    <FormProvider {...form}>
      <HStack spacing={4} backgroundColor="white" display="inline-flex">
        <FilterLocation control={form.control} />
        <FilterPrice />
        <FilterSize />
        <Button leftIcon={<Search fontSize="20px" />} size="lg" fontSize="sm">
          {t('filters.submit')}
        </Button>
      </HStack>
    </FormProvider>
  )
}

export default Filters
