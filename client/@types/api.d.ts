export interface Country {
  name: string
  regions: Region[]
  shortcode: string
  external_id: string
}

export interface Region {
  name: string
  region: Region
  shortcode: string
  external_id: string
  cities: City[]
  country: Country
}

export interface Neighborhood {
  name: string
  region: Region
  external_id: string
  city: City
}

export interface City {
  name: string
  region: Region
  external_id: string
  neighborhoods: Neighborhood[]
}

export interface Ad {
  title: string
  description: string
  date: Date
  forrentbyhousing: string
  unittype: string
  numberbedrooms: number | string
  numberbathrooms: number
  agreementtype: string
  dateavailable: Date
  petsallowed: boolean
  areainfeet: number
  furnished: boolean
  laundryinunit: boolean
  laundryinbuilding: boolean
  dishwasher: boolean
  fridgefreezer: boolean
  airconditioning: boolean
  yard: boolean
  balcony: number
  smokingpermitted: boolean
  gym: boolean
  pool: boolean
  concierge: boolean
  twentyfourhoursecurity: boolean
  bicycleparking: boolean
  storagelocker: boolean
  wheelchairaccessible: boolean
  braillelabels: boolean
  barrierfreeentrancesandramps: boolean
  visualaids: boolean
  accessiblewashroomsinsuite: boolean
  hydro: boolean
  heat: boolean
  water: boolean
  cabletv: boolean
  internet: boolean
  numberparkingspots: number | string
  price: number
  location: string
  type: string
  url: string
  latitude: number
  longitude: number
  elevator: boolean
  audioprompts: boolean
  image: string
  images: string[]
  postcode: string
  city: City
  region: {
    via: 'ads'
    model: 'region'
  }
  country: {
    model: 'country'
    via: 'ads'
  }
  neighborhood: {
    via: 'ads'
    model: 'neighborhood'
  }
}

export type DisplayMode = 'map' | 'list'
