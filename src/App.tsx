import React, {useEffect, useState} from 'react';
import Header from "./Components/Header";
import Main from "./Components/Main";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import axios from "axios";
import {ALL_COUNTRIES} from "./config";


export type getCountryType = {
    capital: string
    flag: string
    name: string
    population: number
    region: string
}

function App() {
    const [countries, setCountries] = useState<getCountryType[]>([])
    useEffect(() => {
        if (!countries.length)
            axios.get<getCountryType[]>(ALL_COUNTRIES).then(({data}) => {
                    setCountries(data)})
    }, [])

    useEffect(()=>{
        if(countries.length){
            handlerSearch('','')
        }
    },[countries])


    // console.log(countries)

    const [filteredCountries, setFilteredCountries] = useState(countries)

    const handlerSearch = (search: string, region: string) => {
        let copyCountries = [...countries]
        if (region) {
            copyCountries = copyCountries.filter(country => country.region.includes(region))
        }
        if (search) {
            copyCountries = copyCountries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(copyCountries)
    }
    // console.log(filteredCountries)

    return (
        <BrowserRouter>
            <Header/>
            <Main>
                <Routes>
                    <Route path={'/'} element={<HomePage countries={filteredCountries} handlerSearch={handlerSearch}/>}/>
                    <Route path={'/country/:countyName'} element={<Details/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Main>
        </BrowserRouter>
    );
}

export default App;
