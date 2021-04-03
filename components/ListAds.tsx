import React from 'react'
import { VStack, Skeleton, Box, Flex, HStack, Divider } from '@chakra-ui/react'
import { Ad } from 'kijiji-scraper'
import AdCard from '~components/AdCard'

interface IListAds {
  ads: Ad[]
  setFocus: (ad: string | null) => void
}

const ListAds = ({ ads, setFocus }: IListAds) => {
  return (
    <VStack spacing={6} py={6}>
      {ads.map((ad) => (
        <AdCard ad={ad} key={ad.url} setFocus={setFocus} />
      ))}
    </VStack>
  )
}

export default ListAds
