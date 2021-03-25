import React, { useRef, useEffect, useMemo } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  FeatureGroup,
} from 'react-leaflet'
import { GeoJsonObject } from 'geojson'
import { Ad } from 'kijiji-scraper'
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import MapPlaceholder from './MapPlaceholder'
import MapPopup from './MapPopup'

interface IMarker {
  ad: Ad
  geojson: GeoJsonObject
  isFocus: boolean
}

const Marker = ({ geojson, ad, isFocus }: IMarker) => {
  const markerRef = useRef(null)

  return (
    <GeoJSON
      key={ad.url}
      ref={markerRef}
      data={geojson}
      pointToLayer={(feature, latlng) => {
        return Leaflet.marker(latlng, {
          icon: Leaflet.icon({
            iconUrl: isFocus
              ? '/assets/img/pin-map-focus.svg'
              : '/assets/img/pin-map.svg',
            iconSize: [30, 30],
          }),
        })
      }}
    >
      <MapPopup ad={ad} />
    </GeoJSON>
  )
}

const MapContent = ({ children }) => {
  const map = useMap()
  const groupRef = useRef(null)

  useEffect(() => {
    if (groupRef.current) {
      map.fitBounds(groupRef.current.getBounds())
    }
  }, [groupRef])

  return <FeatureGroup ref={groupRef}>{children}</FeatureGroup>
}

const convertAdsToMarker = (ads: Ad[], adToFocus: string | null) => {
  if (!ads) return []
  return ads.map((ad) => {
    const isFocus = adToFocus === ad.url
    return (
      <Marker
        key={`${ad.url}-${isFocus ? 'focus' : ''}`}
        ad={ad}
        isFocus={isFocus}
        geojson={{
          type: 'Feature' as 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [
              ad.attributes.coordinates[0],
              ad.attributes.coordinates[1],
            ],
          },
        }}
      />
    )
  })
}
interface IMap extends BoxProps {
  ads: Ad[]
  adToFocus: string | null
}

const Map = ({ ads, adToFocus, ...rest }: IMap) => {
  const markers = useMemo(() => convertAdsToMarker(ads, adToFocus), [
    ads,
    adToFocus,
  ])

  return (
    <Box width="100%" {...rest}>
      <MapContainer
        center={null}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', flexGrow: 1 }}
        placeholder={<MapPlaceholder />}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapContent>{markers}</MapContent>
      </MapContainer>
    </Box>
  )
}

export default Map
