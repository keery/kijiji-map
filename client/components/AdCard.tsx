import React, { useMemo } from 'react'
import { Ad } from '~@types/api'
import {
  Flex,
  Text,
  Box,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Divider,
  Link,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import frLocale from 'date-fns/locale/fr'
import AttributeCard from '~components/AttributeCard'
import Carousel from '~components/Carousel'
import Building from 'public/assets/img/building.svg'
import Couch from 'public/assets/img/couch.svg'
import Bed from 'public/assets/img/bed.svg'
import Car from 'public/assets/img/car.svg'
import Water from 'public/assets/img/water.svg'
import Heat from 'public/assets/img/heat.svg'
import Electric from 'public/assets/img/electric.svg'

interface IAdCard {
  ad: Ad
  setFocus: (ad: string | null) => void
}

const AdCard = ({ ad, setFocus }: IAdCard) => {
  const { t, i18n } = useTranslation('common')

  const date = useMemo(
    () =>
      formatDistanceToNow(new Date(ad.date), {
        addSuffix: true,
        locale: i18n.language === 'fr' ? frLocale : null,
      }),
    [ad.date],
  )

  return (
    <Link
      w="100%"
      href={ad.url}
      _hover={{ textDecoration: 'none', boxShadow: '0px 0px 10px #9c9c9c' }}
      borderRadius="30px"
      p={2.5}
      pr={4}
      boxShadow="0px 0px 7px #ccc"
      overflow="hidden"
      isExternal
      onMouseEnter={() => setFocus(ad.url)}
      onMouseLeave={() => setFocus(null)}
    >
      <Flex w="100%" className="adCard" role="group">
        <Box w="250px" h="200px" borderRadius="20px" overflow="hidden">
          <Carousel slides={ad.images} />
        </Box>
        <Flex
          pl={5}
          py={1}
          w="1px"
          flex={1}
          direction="column"
          justifyContent="space-between"
        >
          <Flex h="100%" direction="column" justifyContent="space-between">
            <Flex direction="column">
              <Text isTruncated fontSize="lg" mb={2}>
                {ad.title}
              </Text>
              <HStack justifyContent="flex-start">
                <Tag variant="subtle" colorScheme="blue">
                  <TagLeftIcon boxSize="16px" as={Building} />
                  <TagLabel>{ad.unittype}</TagLabel>
                </Tag>
                <Tag variant="subtle" colorScheme="blue">
                  <TagLeftIcon boxSize="16px" as={Couch} />
                  <TagLabel>
                    {ad.furnished
                      ? t('ad.attribute.furnished')
                      : t('ad.attribute.furnishedNo')}
                  </TagLabel>
                </Tag>
              </HStack>
            </Flex>
            <Flex justifyContent="space-between" alignItems="flex-end">
              <Text color="gray.300" pb={1}>
                {date}
              </Text>
              <Text
                fontWeight="bold"
                fontSize="28px"
                background="linear-gradient(to right, #8CA6DB, #B993D6)"
                bgClip="text"
              >
                {ad.price ? `$ ${ad.price}` : '--'}
              </Text>
            </Flex>
          </Flex>
          <HStack
            justifyContent="space-between"
            borderTop="1px solid"
            borderColor="gray.100"
            py={2}
            px={1}
            color="gray.400"
            alignItems="center"
            spacing={3}
          >
            {ad.numberbedrooms !== 'Not Available' && (
              <>
                <AttributeCard
                  name="bedroom"
                  icon={<Bed fontSize="20px" />}
                  value={ad.numberbedrooms}
                />
                <Divider orientation="vertical" h="85%" />
              </>
            )}
            {ad.numberparkingspots !== 'Not Available' && (
              <>
                <AttributeCard
                  name="parking"
                  icon={<Car fontSize="20px" />}
                  value={ad.numberparkingspots}
                />
                <Divider orientation="vertical" h="85%" />
              </>
            )}
            <AttributeCard
              name="electric"
              icon={<Electric fontSize="20px" />}
              value={ad.hydro}
              displayBoolean
            />
            <Divider orientation="vertical" h="85%" />
            <AttributeCard
              name="heat"
              icon={<Heat fontSize="20px" />}
              value={ad.heat}
              displayBoolean
            />
            <Divider orientation="vertical" h="85%" />
            <AttributeCard
              name="water"
              icon={<Water fontSize="20px" />}
              value={ad.water}
              displayBoolean
            />
          </HStack>
        </Flex>
      </Flex>
    </Link>
  )
}

export default AdCard
