import { LOCAL_STORAGE_SEARCH } from '~constants'

export const getDefaultValue = () => {
  try {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem(LOCAL_STORAGE_SEARCH)
    ) {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_SEARCH))
    }
    return {
      size: 0,
      min: 0,
      max: 10000,
      location: 1700281,
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
