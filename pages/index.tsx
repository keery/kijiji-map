import { Box, Container } from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import { SSRConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useSearch } from '~hooks/useSearch'
import Filters from '~components/Filters'
import Logo from '~components/Logo'

const Home: NextPage = () => {
  const { t } = useTranslation('home')
  // const res = useSearch();

  return (
    <Box backgroundColor="gray.400" h="100vh">
      <Container
        py={4}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Logo />
        <Filters />
      </Container>
    </Box>
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
