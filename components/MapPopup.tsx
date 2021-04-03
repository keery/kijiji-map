import React from 'react'
import {
  Flex,
  Box,
  Text,
  Button,
  Link,
  Tag,
  TagLeftIcon,
  TagLabel,
} from '@chakra-ui/react'
import { Popup } from 'react-leaflet'
import { Ad } from 'kijiji-scraper'
import Couch from 'public/assets/img/couch.svg'
import { useTranslation } from 'next-i18next'
import Carousel from '~components/Carousel'

interface IMapPopup {
  ad: Ad
}

const MapPopup = ({ ad }: IMapPopup) => {
  const { t } = useTranslation('common')

  return (
    <Popup maxWidth={300}>
      <Flex w="100%" direction="column" className="custom-popup" role="group">
        <Box w="100%" h="200px" borderTopRadius="20px" overflow="hidden">
          <Carousel slides={ad.images} />
        </Box>
        <Box px={4} py={2} pb={3.5}>
          <Text fontSize="lg" isTruncated fontWeight="500">
            {ad.title}
          </Text>
          <Flex justifyContent="space-between" py={4}>
            <Tag variant="subtle" colorScheme="blue" alignSelf="center">
              <TagLeftIcon boxSize="16px" as={Couch} />
              <TagLabel>
                {ad.attributes.furnished
                  ? t('ad.attribute.furnished')
                  : t('ad.attribute.furnishedNo')}
              </TagLabel>
            </Tag>
            <Text
              fontWeight="bold"
              fontSize="28px"
              background="linear-gradient(to right, #8CA6DB, #B993D6)"
              bgClip="text"
            >
              {ad.attributes.price ? `$ ${ad.attributes.price}` : '--'}
            </Text>
          </Flex>
          <Button as={Link} href={ad.url} isExternal w="100%">
            {t('popup.seeMore')}
          </Button>
        </Box>
      </Flex>
    </Popup>
  )
}

export default MapPopup
