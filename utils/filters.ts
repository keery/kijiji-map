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
      min: 0,
      max: 10000,
      location: 1700281,
    }
  } catch {
    localStorage.removeItem(LOCAL_STORAGE_SEARCH)
  }
}
