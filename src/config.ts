const BASE_URL='https://restcountries.com/v2/'

export const ALL_COUNTRIES=`${BASE_URL}all?fields=name,capital,population,flag,region`

export const filterByCode = (codes: string[]) =>`${BASE_URL}alpha?codes=${codes.join(',')}&fields=name`

export const Get_Clicked_Country= (countyName?: string)=> {
    return`${BASE_URL}name/${countyName}?fields=name,capital,population,flag,region,nativeName,subregion,topLevelDomain,currencies,languages,borders`
}