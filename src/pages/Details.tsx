import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router";
import {filterByCode, Get_Clicked_Country} from "../config";
import styled from "styled-components";
import {IoArrowBackSharp} from "react-icons/io5";
import Info, {styleDisruptionTitle} from "../Components/Info";

type LanguagesType = {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
}
export type CountryForDetails = {
    nativeName: string
    subregion: string
    topLevelDomain: string[]
    currencies: CurrenciesType[]
    languages: LanguagesType[]
    capital: string
    flag: string
    name: string
    population: number
    region: string
    borders: string[]
}
type CurrenciesType = {
    code: string
    name: string
    symbol: string
}
type BordersType = {
    name: string
}

const WrapperCard = styled.div`
  padding: 2rem 3rem;
`
const DetailsCard = styled.div`
  display: flex;
  margin-top: 50px;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`
const CountryImage = styled.img`
  width: 420px;
  height: 300px;
  box-shadow: var(--shadow);
`
const CardInformationWrapper = styled.div`
  padding-top: 2rem;
  padding-left: 10rem;
  height: 250px;
  @media (max-width: 1360px) {
    padding-left: 7rem;
  }
  @media (max-width: 1260px) {
    padding-left: 5rem;
  }
  @media (max-width: 850px ) {
    padding-left: 16.7rem;
  }
`
const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 35px;
  box-shadow: var(--shadow);
  color: var(--color-text);
  background-color: var(--color-ui-base);
  border-radius: var(--radius);
  border: var(--color-bg);
  font-family: var(--family);
  font-size: var(--fs-sm);
  font-weight: var(--fw-normal);

  :hover {
    background-color: var(--card-hover);
  }
`
const Meta = styled.div`
  @media (max-width: 1000px) {
    @media (max-width: 1000px) {
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
`
const BordersGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

`

const BorderCountry = styled.button`
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  color: var(--color-text);
  border: none;
  margin-left: 10px;
  height: 30px;
  cursor: pointer;

  :hover {
    background-color: var(--card-hover);
  }

`

const Details = () => {
    const {countyName} = useParams()
    const navigation = useNavigate()
    const [country, setCountry] = useState<CountryForDetails[]>([])
    const [borderCountry, setBorderCountry] = useState<BordersType[]>([])

    useEffect(() => {
        axios.get<CountryForDetails[]>(Get_Clicked_Country(countyName)).then(data => {
            setCountry(data.data)
            axios.get<BordersType[]>(filterByCode(data.data[0].borders)).then(r => {
                setBorderCountry(r.data)
            })
        })
    }, [countyName])

    const nav = useNavigate()
    // console.log(borderCountry)

    return (
        <WrapperCard>
            {
                country?.map(el => {
                    return <>
                        <BackButton onClick={() => navigation(-1)}><IoArrowBackSharp/> <span
                            style={{marginLeft: '5px', cursor: 'pointer'}}>Back</span> </BackButton>
                        <DetailsCard>
                            <CountryImage src={el.flag}/>
                            <CardInformationWrapper>
                                <h3>{el.name}</h3>
                                <Info info={el}/>
                                <BordersGroup>
                                    <span style={styleDisruptionTitle}>Borders Countries: </span>
                                    <Meta>
                                        {
                                            !borderCountry.length ? <span>Not Borders Countries</span> :
                                                borderCountry.map((m) => (
                                                    <BorderCountry onClick={() => nav(`/country/${m.name}`)}
                                                                   key={m.name}>{m.name}
                                                    </BorderCountry>))}
                                    </Meta>
                                </BordersGroup>
                            </CardInformationWrapper>
                        </DetailsCard></>
                })}
        </WrapperCard>

    );
};

export default Details;