import React, { useState, useRef, useEffect } from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
import Filters from '~components/Filters'
import Logo from '~components/Logo'
import ListAds from '~components/ListAds'
import ListAdsSkeleton from '~components/ListAdsSkeleton'
import DisplayToggler from '~components/DisplayToggler'
import Loading from '~components/Loading'
import { useAds } from '~hooks/useAds'
import { DisplayMode } from '~@types/api'
import dynamic from 'next/dynamic'
import { formatQuery, getDefaultValue } from '~utils/filters'
import { useIsFetching } from 'react-query'

const Map = dynamic(() => import('~components/Map'), { ssr: false })

const MapSearcher = () => {
  const listRef = useRef(null)
  const [query, setQuery] = useState(formatQuery(getDefaultValue()))
  const [adToFocus, setFocus] = useState(null)
  const [displayMode, setDisplayMode] = useState<DisplayMode>('map')
  const { data, isLoading } = useAds(query)
  const isFetching = useIsFetching(['ads'])

  const handlePaginate = ({ selected }) => {
    setQuery({ ...query, _page: selected })
  }

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo(0, 0)
    }
  }, [isFetching])

  return (
    <>
      <Container
        py={4}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        boxShadow="1px 1px 3px #ccc"
        bg="white"
        pos="relative"
        zIndex="1005"
      >
        <Logo />
        <Filters setQuery={setQuery} isLoading={isLoading} />
      </Container>
      <Flex overflow="hidden" flex={1} pos="relative">
        <DisplayToggler mode={displayMode} setter={setDisplayMode} />
        <Box
          ref={listRef}
          backgroundColor="white"
          w={{ base: '100vw', md: '550px', lg: '680px' }}
          overflowY="auto"
          px={{ base: 2, md: 4, lg: 6 }}
          display={{
            base: displayMode === 'list' ? 'block' : 'none',
            md: 'block',
          }}
        >
          <Loading isLoading={isLoading} skeleton={<ListAdsSkeleton />}>
            <ListAds
              page={query._page}
              ads={data?.ads}
              nbAds={data?.count}
              setFocus={setFocus}
              handlePaginate={handlePaginate}
            />
          </Loading>
        </Box>
        <Map
          isLoading={isLoading}
          flex={1}
          ads={data?.ads}
          adToFocus={adToFocus}
          setQuery={setQuery}
          display={{
            base: displayMode === 'map' ? 'block' : 'none',
            md: 'block',
          }}
        />
      </Flex>
    </>
  )
}

export default MapSearcher
