import React, {useEffect, useState} from 'react';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Controls from "./Components/Controls/Controls";
import axios from "axios";
import {ALL_COUNTRIES} from "./config";
import List from "./Components/List";
import Card from "./Components/Controls/Card";


 export type InfoType={
    title:string
    description:string
}
type getCountryType={
    capital: string
    flag: string
    name: string
    population: number
    region: string
}

function App() {

    const [countries,setCountries]=useState<getCountryType[]>([])
    useEffect(()=>{
        axios.get<getCountryType[]>(ALL_COUNTRIES).then(({data})=>setCountries(data))
    },[])

    return (
        <div>
            <Header/>
            <Main>
                <Controls/>
                <List>
                    {countries.map(country=>{
                        const countryInfo:InfoType[]=[
                                {
                                    title:'Population',
                                    description:country.population.toLocaleString()
                                },
                                {
                                    title:'Capital',
                                    description:country.capital
                                },
                                {
                                    title:'Region',
                                    description:country.region
                                }
                            ]
                        return <Card info={countryInfo} img={country.flag} countryName={country.name} />
                    })}
                </List>
            </Main>
        </div>
    );
}

export default App;
