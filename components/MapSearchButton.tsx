import React, { useCallback, useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import Refresh from 'public/assets/img/refresh.svg'
import { useMap, useMapEvents } from 'react-leaflet'
import { useFormContext } from 'react-hook-form'
import { formatQuery } from '~utils/filters'

interface Props {
  setQuery: (query: Record<string, any>) => void
}

const MapSearchButton = ({ setQuery }: Props) => {
  const map = useMap()
  const [isVisible, setVisible] = useState(false)
  const form = useFormContext()
  const { t } = useTranslation('common')

  const eventCallback = useCallback(() => {
    if (!isVisible) setVisible(true)
  }, [isVisible])

  useMapEvents({
    dragstart: eventCallback,
  })

  const search = useCallback((map) => {
    setVisible(false)
    const query = formatQuery({
      ...form.getValues(),
      bounds: map.getBounds(),
    })
    setQuery(query)
  }, [])

  return (
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
  )
}

export default MapSearchButton
