import React, { useRef, useEffect, useMemo } from 'react'
import ReactDOMServer from 'react-dom/server'
import { Box, BoxProps, Flex, useBreakpointValue } from '@chakra-ui/react'
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  FeatureGroup,
} from 'react-leaflet'
import { GeoJsonObject } from 'geojson'
import { Ad } from '~@types/api'
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Loader from '~components/Loader'
import MapPlaceholder from '~components/MapPlaceholder'
import MapSearchButton from '~components/MapSearchButton'
import MapPopup from '~components/MapPopup'
import MapMarker from '~components/MapMarker'

interface Props {
  ad: Ad
  geojson: GeoJsonObject
  isFocus: boolean
}

const Marker = ({ geojson, ad, isFocus }: Props) => {
  const markerRef = useRef(null)

  return (
    <GeoJSON
      key={ad.url}
      ref={markerRef}
      data={geojson}
      pointToLayer={(feature, latlng) =>
        Leaflet.marker(latlng, {
          icon: Leaflet.divIcon({
            className: isFocus ? 'is-focus' : '',
            html: ReactDOMServer.renderToString(
              <MapMarker isFocus={isFocus} price={ad.price} />,
            ),
          }),
        })
      }
    >
      <MapPopup ad={ad} />
    </GeoJSON>
  )
}

const MapContent = ({ children, ads }) => {
  const map = useMap()
  const groupRef = useRef(null)
  useEffect(() => {
    if (
      groupRef.current &&
      Object.keys(groupRef.current.getBounds()).length > 0
    ) {
      map.fitBounds(groupRef.current.getBounds())
    }
  }, [groupRef.current, ads])

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
        geojson={
          {
            type: 'Feature' as 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [ad.latitude, ad.longitude],
            },
          } as GeoJsonObject
        }
      />
    )
  })
}
interface MapProps extends BoxProps {
  ads?: Ad[]
  isLoading: boolean
  adToFocus: string | null
  setQuery: (query: Record<string, any>) => void
}

const Map = ({
  ads = [],
  adToFocus,
  setQuery,
  isLoading,
  ...rest
}: MapProps) => {
  const showControl = useBreakpointValue({ base: false, md: true })
  const markers = useMemo(
    () => convertAdsToMarker(ads, adToFocus),
    [ads, adToFocus],
  )

  return (
    <Box width="100%" pos="relative" {...rest}>
      {isLoading && (
        <Flex
          layerStyle="full"
          zIndex="5000"
          alignItems="center"
          justifyContent="center"
          bgColor="rgb(0 0 0 / 50%)"
        >
          <Loader />
        </Flex>
      )}
      {typeof showControl !== 'undefined' && (
        <MapContainer
          zoomControl={showControl}
          attributionControl={showControl}
          center={[48.9683098, -93.7246537]}
          zoom={4}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%', flexGrow: 1 }}
          placeholder={<MapPlaceholder />}
          className="map"
        >
          <MapSearchButton setQuery={setQuery} />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
            id="mapbox/streets-v11"
          />
          <MapContent ads={ads}>{markers}</MapContent>
        </MapContainer>
      )}
    </Box>
  )
}

export default Map
