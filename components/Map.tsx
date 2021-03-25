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

interface IMarker {
  id: string
  geojson: GeoJsonObject
}

const Marker = ({ geojson, id }: IMarker) => {
  const markerRef = useRef(null)

  return (
    <GeoJSON
      key={id}
      ref={markerRef}
      data={geojson}
      pointToLayer={(feature, latlng) => {
        return Leaflet.marker(latlng, {
          icon: Leaflet.icon({
            iconUrl: '/assets/img/pin-map.svg',
            iconSize: [30, 30],
          }),
        })
      }}
      style={{ fillColor: 'blue' }}
    />
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

const convertAdsToMarker = (ads: Ad[]) => {
  if (!ads) return []
  return ads.map((ad) => {
    return (
      <Marker
        key={ad.url}
        id={ad.url}
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
}

const Map = ({ ads, ...rest }: IMap) => {
  const markers = useMemo(() => convertAdsToMarker(ads), [ads])

  return (
    <Box width="100%" {...rest}>
      <MapContainer
        center={null}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', flexGrow: 1 }}
        placeholder={<MapPlaceholder />}
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
