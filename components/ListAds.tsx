import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { Ad } from 'kijiji-scraper'
import AdCard from '~components/AdCard'

interface IListAds {
  ads: Ad[]
}

const ListAds = ({ ads }: IListAds) => {
  return (
    <Box backgroundColor="white" w="45vw" maxW="750px" overflowY="auto" px={6}>
      <VStack spacing={6} py={6}>
        {ads.map((ad) => (
          <AdCard ad={ad} key={ad.url} />
        ))}
      </VStack>
    </Box>
  )
}

export default ListAds
