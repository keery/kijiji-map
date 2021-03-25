import React from 'react'
import { Container, Flex } from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import { useSearch } from '~hooks/useSearch'
import Filters from '~components/Filters'
import Logo from '~components/Logo'
import ListAds from '~components/ListAds'
import ListAdsSkeleton from '~components/ListAdsSkeleton'
import Loading from '~components/Loading'
import { data } from '~data'

const Map = dynamic(() => import('~components/Map'), { ssr: false })

const ads = data
const isLoading = false
const Home: NextPage = () => {
  // const { data: ads, isLoading } = useSearch()
  // ads?.map((ad) => console.log(ad.attributes.location))

  return (
    <Flex backgroundColor="gray.400" h="100vh" direction="column">
      <Container
        py={4}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        boxShadow="1px 1px 3px #ccc"
        bg="white"
        pos="relative"
        zIndex="10000"
      >
        <Logo />
        <Filters />
      </Container>
      <Flex overflow="hidden" flex={1}>
        <Loading isLoading={isLoading} skeleton={<ListAdsSkeleton />}>
          <ListAds ads={ads} />
        </Loading>
        <Map ads={ads} />
      </Flex>
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
