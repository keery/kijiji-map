import React, { useCallback, useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import Refresh from 'public/assets/img/refresh.svg'
import { useMap, useMapEvents } from 'react-leaflet'
import { useFormContext } from 'react-hook-form'
import { formatQuery } from '~utils/filters'
import { useIsFetching } from 'react-query'

interface Props {
  setQuery: (query: Record<string, any>) => void
}

const MapSearchButton = ({ setQuery }: Props) => {
  const map = useMap()
  const [isVisible, setVisible] = useState(false)
  const [isSearching, setSearching] = useState(false)
  const [isLoaded, setLoaded] = useState(false)
  const form = useFormContext()
  const { t } = useTranslation('common')
  const isFetching = useIsFetching(['ads'])

  useEffect(() => {
    if (isFetching && !isSearching) {
      setVisible(false)
      setLoaded(false)
    } else if (!isLoaded) {
      setTimeout(() => {
        setLoaded(true)
      }, 1000)
    }
  }, [isFetching])

  const eventCallback = useCallback(
    ({ type }) => {
      if (!isLoaded || isFetching) {
        if (type === 'load') setLoaded(true)
        return
      }
      if (!isVisible && !isSearching) setVisible(true)

      setSearching(false)
    },
    [isVisible, isSearching, isLoaded, isFetching],
  )

  useMapEvents({
    load: eventCallback,
    dragstart: eventCallback,
    zoomend: eventCallback,
    moveend: eventCallback,
  })

  const search = useCallback((map) => {
    setSearching(true)
    setVisible(false)
    form.setValue('location', {
      value: 0,
      label: t('manualSearch'),
    })
    console.log(map.getBounds())
    form.setValue('bounds', map.getBounds())

    const query = formatQuery({
      ...form.getValues(),
      bounds: map.getBounds(),
    })
    setQuery(query)
  }, [])

  return (
    <>
      <Button
        visibility={isVisible ? 'visible' : 'hidden'}
        onClick={() => search(map)}
        leftIcon={<Refresh />}
        bg="white"
        color="black"
        pos="absolute"
        left="50%"
        right="50%"
        top="10px"
        transform="translateX(-50%)"
        fontSize={12}
        zIndex={999999}
      >
        {t('searchBounds')}
      </Button>
    </>
  )
}

export default MapSearchButton
