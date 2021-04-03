import React, { useState } from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
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

// const ads = data
// const isLoading = false
const Home: NextPage = () => {
  const [adToFocus, setFocus] = useState(null)
  const { data: ads, isLoading } = useSearch()

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
        <Box
          backgroundColor="white"
          w="45vw"
          minW="680px"
          maxW="750px"
          overflowY="auto"
          px={6}
        >
          <Loading isLoading={isLoading} skeleton={<ListAdsSkeleton />}>
            {/* @ts-ignore */}
            <ListAds ads={ads} setFocus={setFocus} />
          </Loading>
        </Box>
        {/* @ts-ignore */}
        <Map ads={ads} adToFocus={adToFocus} />
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
