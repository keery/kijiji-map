import React from 'react'
import { Flex } from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FormProvider, useForm } from 'react-hook-form'
import { getDefaultValue } from '~utils/filters'
import MapSearcher from '~components/MapSearcher'

const Home: NextPage = () => {
  const form = useForm({
    defaultValues: getDefaultValue(),
    shouldUnregister: false,
  })

  return (
    <Flex backgroundColor="gray.400" h="100%" direction="column">
      <FormProvider {...form}>
        <MapSearcher />
      </FormProvider>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps<SSRConfig> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'location'])),
    },
  }
}

export default Home
