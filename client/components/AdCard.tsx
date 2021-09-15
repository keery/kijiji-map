import React, { useMemo } from 'react'
import { Ad } from '~@types/api'
import { MD, BASE, LG, SM } from '~constants'
import {
  Flex,
  Text,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Link,
  StackDivider,
  useBreakpointValue,
  AspectRatio,
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

interface Props {
  ad: Ad
  setFocus: (ad: string | null) => void
}

const AdCard = ({ ad, setFocus }: Props) => {
  const { t, i18n } = useTranslation('common')
  const breakpoint = useBreakpointValue({
    base: BASE,
    sm: SM,
    md: MD,
    lg: LG,
  })
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
      _hover={{ textDecoration: 'none', boxShadow: '0px 0px 6px #9c9c9c' }}
      borderRadius="30px"
      p={2.5}
      pr={{ base: 2.5, sm: 4 }}
      boxShadow="0px 0px 7px #ccc"
      overflow="hidden"
      isExternal
      onMouseEnter={() => setFocus(ad.url)}
      onMouseLeave={() => setFocus(null)}
    >
      <Flex
        w="100%"
        className="adCard"
        role="group"
        direction={{ base: 'column', sm: 'row' }}
      >
        <AspectRatio
          className="adCarousel"
          borderRadius="20px"
          overflow="hidden"
          w={{ base: '100%', sm: '200px', md: '180px', lg: '250px' }}
        >
          <Carousel slides={ad.images} />
        </AspectRatio>
        <Flex
          py={1}
          pr={{ base: 2, sm: 0 }}
          pl={{ base: 2, sm: 3 }}
          pt={{ base: 3, sm: 0 }}
          w={{ base: '100%', sm: '1px' }}
          flex={1}
          direction="column"
          justifyContent="space-between"
        >
          <Flex h="100%" direction="column" justifyContent="space-between">
            <Flex direction="column">
              <Text
                isTruncated={breakpoint !== BASE}
                noOfLines={breakpoint === BASE ? 2 : null}
                fontSize="lg"
                mb={2}
              >
                {ad.title}
              </Text>
              <HStack justifyContent="flex-start">
                <Tag variant="subtle" colorScheme="blue">
                  <TagLeftIcon boxSize="16px" as={Building} />
                  <TagLabel>{t(`ad.attribute.${ad.unittype}`)}</TagLabel>
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
            <Flex
              justifyContent="space-between"
              alignItems="flex-end"
              pt={{ base: 2, sm: 0 }}
            >
              <Text color="gray.300" pb={1}>
                {date}
              </Text>
              <Text
                fontWeight="bold"
                fontSize="28px"
                background="linear-gradient(to right, #373373, #554fa9)"
                bgClip="text"
              >
                {ad.price ? `$ ${ad.price}` : '--'}
              </Text>
            </Flex>
          </Flex>
          <HStack
            divider={
              <StackDivider
                borderColor="gray.100"
                h="18px"
                alignSelf="center"
              />
            }
            justifyContent="space-between"
            borderTop="1px solid"
            borderColor="gray.100"
            pt={2}
            pb={{ base: 0, sm: 2 }}
            px={1}
            color="gray.400"
            alignItems="center"
            spacing={3}
          >
            {ad.numberbedrooms !== 'Not Available' && (
              <AttributeCard
                name="bedroom"
                icon={<Bed fontSize="20px" />}
                value={ad.numberbedrooms}
              />
            )}
            {breakpoint === LG && ad.numberparkingspots !== 'Not Available' && (
              <AttributeCard
                name="parking"
                icon={<Car fontSize="20px" />}
                value={ad.numberparkingspots}
              />
            )}
            <AttributeCard
              name="electric"
              icon={<Electric fontSize="20px" />}
              value={ad.hydro}
              displayBoolean
            />
            <AttributeCard
              name="heat"
              icon={<Heat fontSize="20px" />}
              value={ad.heat}
              displayBoolean
            />
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
