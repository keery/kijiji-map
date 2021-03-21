import { Box, Container, Flex } from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import { SSRConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import { useSearch } from '~hooks/useSearch'
import Filters from '~components/Filters'
import Logo from '~components/Logo'
import ListAds from '~components/ListAds'
import Loading from '~components/Loading'

const Map = dynamic(() => import('~components/Map'), { ssr: false })

const Home: NextPage = () => {
  const { t } = useTranslation('home')
  const { data: ads, isLoading } = useSearch()
  console.log(ads)

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
        <Loading isLoading={isLoading}>
          <ListAds ads={ads} />
        </Loading>
        <Map />
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
