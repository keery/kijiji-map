import { Box, Text, Heading, ButtonGroup, Button } from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import { SSRConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useSearch } from '~hooks/useSearch'
import Filters from '~components/Filters'

const Home: NextPage = () => {
  const { t } = useTranslation('home')
  // const res = useSearch();

  return <Filters />
}

export const getServerSideProps: GetServerSideProps<SSRConfig> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home
