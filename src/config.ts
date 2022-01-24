const BASE_URL='https://restcountries.com/v2/'

export const ALL_COUNTRIES=`${BASE_URL}all?fields=name,capital,population,flag,region`

export const searchByCountry = (nameCountry:string) => `${BASE_URL}name/${nameCountry}`

export const filterByCode = (codes:string[]) =>`${BASE_URL}alpha?codes=${codes.join(',')}`
