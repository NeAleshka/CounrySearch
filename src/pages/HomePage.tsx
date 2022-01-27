import React, {useEffect, useState} from 'react'
import axios from "axios";
import {ALL_COUNTRIES} from "../config";
import List from "../Components/List";
import Card from "../Components/Controls/Card";
import Controls from "../Components/Controls/Controls";
import {useNavigate} from "react-router";
import {v1} from "uuid";

export type InfoType = {
    title: string
    description: string
}
export type getCountryType = {
    capital: string
    flag: string
    name: string
    population: number
    region: string
}

const HomePage = () => {
    const [countries, setCountries] = useState<getCountryType[]>([])
    useEffect(() => {
        axios.get<getCountryType[]>(ALL_COUNTRIES).then(({data}) => setCountries(data))
    }, [])

    const nav = useNavigate()
    return (
        <>
            <Controls/>
            <List>
                {countries.map(country => {
                    const countryInfo: InfoType[] = [
                        {
                            title: 'Population',
                            description: country.population.toLocaleString()
                        },
                        {
                            title: 'Capital',
                            description: country.capital
                        },
                        {
                            title: 'Region',
                            description: country.region
                        }
                    ]
                    return <Card key={country.name}
                                 info={countryInfo}
                                 img={country.flag}
                                 countryName={country.name}
                                 onClickCard={() => nav(`/country/${country.name}`,
                                     {
                                         state: {
                                             name: country.name,
                                             population: country.population,
                                         }
                                     })}/>
                })}
            </List>
        </>
    )
}

export default HomePage