import { LOCAL_STORAGE_SEARCH } from '~constants'
import { PER_PAGE } from '~constants'
import { LatLngBounds } from 'leaflet'

export const mapLocation = (location): Record<string, any> => {
  if (typeof location === 'undefined' || !location || !location.value) return {}

  const splittedLocation = location.value.split('.')
  if (splittedLocation.length <= 1) return {}
  const type = splittedLocation[0]
  const id = splittedLocation[1]
  return {
    [`${type}_eq`]: id,
  }
}

export const mapBounds = (bounds: LatLngBounds): Record<string, any> => {
  if (!bounds) return {}

  const NE = bounds.getNorthEast()
  const SW = bounds.getSouthWest()

  return {
    latNe: NE.lat,
    lngNe: NE.lng,
    latSw: SW.lat,
    lngSw: SW.lng,
  }
}

export const getDefaultValue = () => {
  try {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem(LOCAL_STORAGE_SEARCH)
    ) {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_SEARCH))
    }
    return {
      bounds: null,
      size: 0,
      min: 0,
      max: 10000,
      location: 1,
    }
  } catch {
    localStorage.removeItem(LOCAL_STORAGE_SEARCH)
  }
}

export const sizeMapping = {
  1: [0],
  2: [0],
  3: [1, 1.5],
  4: [2, 2.5],
  5: [3, 3.5],
  6: [4, 4.5],
  7: [5],
}

export const getSize = (size: number = 0) => {
  if (Number(size) === 0) return null

  const mappedSize = sizeMapping[size]

  if (!mappedSize) {
    return console.log('ERROR Mapping size')
  }

  if (mappedSize.length === 1) {
    return {
      numberbedrooms_eq: mappedSize[0],
    }
  }

  return {
    numberbedrooms_gte: mappedSize[0],
    numberbedrooms_lte: mappedSize[1],
  }
}

export const formatQuery = (data: Record<string, any>) => {
  return {
    ...getSize(data.size),
    price_gte: data.min,
    price_lte: data.max,
    _page: 0,
    _limit: PER_PAGE,
    ...mapLocation(data?.location),
    ...mapBounds(data?.bounds),
  }
}
