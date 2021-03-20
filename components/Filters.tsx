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
      <HStack
        py={5}
        px={5}
        spacing={4}
        borderBottom="1px solid"
        borderColor="gray.100"
        backgroundColor="white"
        display="inline-flex"
        borderRadius="full"
      >
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
