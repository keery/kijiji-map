import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { Ad } from 'kijiji-scraper'
import AdCard from '~components/AdCard'

interface IListAds {
  ads: Ad[]
  setFocus: (ad: string | null) => void
}

const ListAds = ({ ads, setFocus }: IListAds) => {
  return (
    <Box
      backgroundColor="white"
      w="45vw"
      minW="680px"
      maxW="750px"
      overflowY="auto"
      px={6}
    >
      <VStack spacing={6} py={6}>
        {ads.map((ad) => (
          <AdCard ad={ad} key={ad.url} setFocus={setFocus} />
        ))}
      </VStack>
    </Box>
  )
}

export default ListAds
