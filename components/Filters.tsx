import React from 'react'
import { Box } from '@chakra-ui/react'
import FilterPrice from '~components/Price/FilterPrice'
import { FormProvider, useForm } from 'react-hook-form'

const Filters = () => {
  const form = useForm({
    defaultValues: {
      min: 0,
      max: 10000,
    },
  })

  return (
    <FormProvider {...form}>
      <Box p={10} w="100%">
        <FilterPrice />
      </Box>
    </FormProvider>
  )
}

export default Filters
