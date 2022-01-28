import React, {useEffect, useState} from 'react'
import axios from "axios";
import {ALL_COUNTRIES} from "../config";
import List from "../Components/List";
import Card from "../Components/Controls/Card";
import Controls from "../Components/Controls/Controls";
import {useNavigate} from "react-router";
import {v1} from "uuid";
import {getCountryType} from "../App";

export type InfoType = {
    title: string
    description: string
}
export type getCountryHPType = {
    countries:getCountryType[]
    handlerSearch:(search: string, region: string)=>void
}

const HomePage = (props:getCountryHPType) => {

    const nav = useNavigate()
    return (
        <>
            <Controls handlerSearch={props.handlerSearch}/>
            <List>
                {props.countries.map(country => {
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
                                 onClickCard={() => nav(`/country/${country.name}`)}/>
                })}
            </List>
        </>
    )
}

export default HomePage