import { LOCAL_STORAGE_SEARCH } from '~constants'
import { PER_PAGE } from '~constants'

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

export const mapBounds = (bounds): Record<string, any> => {
  if (!Boolean(bounds)) return {}

  const NE = bounds._northEast
  const SW = bounds._southWest

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

export const bedroomMapping = {
  1: 0,
  2: 0,
  3: 1,
  4: 2,
  5: 3,
  6: 4,
  7: 5,
}

export const getBedrooms = (size: number = 0) => {
  if (Number(size) === 0) return null

  if (!bedroomMapping[size]) {
    return console.log('ERROR Mapping size')
  }

  return {
    numberbedrooms_gte: bedroomMapping[size],
  }
}

export const getBathrooms = (size: number = 0) => {
  if (Number(size) === 0) return null

  return {
    numberbathrooms_gte: bedroomMapping[size],
  }
}

export const formatQuery = (data: Record<string, any>) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_SEARCH, JSON.stringify(data))
  }
  return {
    ...getBedrooms(data.bedrooms),
    ...getBathrooms(data.bathrooms),
    price_gte: data.min,
    price_lte: data.max,
    _page: 0,
    _limit: PER_PAGE,
    ...mapLocation(data?.location),
    ...mapBounds(data?.bounds),
  }
}
