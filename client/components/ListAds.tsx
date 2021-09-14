import React, { useMemo } from 'react'
import { VStack, Box, Icon, Text, Flex } from '@chakra-ui/react'
import { Ad } from '~@types/api'
import AdCard from '~components/AdCard'
import ReactPaginate from 'react-paginate'
import ChevronLeft from 'public/assets/img/chevron-left.svg'
import ChevronRight from 'public/assets/img/chevron-right.svg'
import { PER_PAGE } from '~constants'
import HomeIcon from 'public/assets/img/home.svg'
import { useTranslation } from 'next-i18next'

interface Props {
  ads: Ad[]
  page: number
  setFocus: (ad: string | null) => void
  nbAds?: number
  handlePaginate: (page: { selected: number }) => void
}

const ListAds = ({
  ads = [],
  setFocus,
  nbAds = 0,
  handlePaginate,
  page,
}: Props) => {
  const pageCount = useMemo(
    () => Math.ceil(nbAds / PER_PAGE),
    [nbAds, PER_PAGE],
  )
  const { t } = useTranslation('common')

  return (
    <Box>
      <Flex alignItems="center" pt={5}>
        <HomeIcon width="28px" height="28px" />
        <Text pl={3} fontSize="xl" lineHeight={1}>
          {t(`adsFound${nbAds > 1 ? 's' : ''}`, { nb: nbAds })}
        </Text>
      </Flex>
      <VStack spacing={{ base: 3, md: 6 }} py={6}>
        {ads.map((ad) => (
          <AdCard ad={ad} key={ad.url} setFocus={setFocus} />
        ))}
      </VStack>
      {pageCount > 1 && (
        <Box pb={20} pt={10}>
          <ReactPaginate
            forcePage={page}
            pageCount={pageCount}
            containerClassName={'pagination'}
            previousLabel={<Icon as={ChevronLeft} />}
            nextLabel={<Icon as={ChevronRight} />}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            onPageChange={handlePaginate}
          />
        </Box>
      )}
    </Box>
  )
}

export default ListAds
