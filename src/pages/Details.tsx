import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router";
import {filterByCode, Get_Clicked_Country} from "../config";
import styled from "styled-components";
import {IoArrowBackSharp} from "react-icons/io5";

type LanguagesType = {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
}
type CountryForDetails = {
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
const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 120px;
  width: 700px;
  line-height: 1.5rem;
  @media (max-width: 1130px) {
    height: 250px;
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
`
const styleDisruptionTitle = {
    marginRight: '0.3rem',
    fontWeight: 'var(--fw-bold)'
}
const Meta=styled.div`
@media (max-width: 1000px){
  @media(max-width: 1000px){
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

    const nav= useNavigate()

    const [isMobile, setIsMobile] = useState(false)
    window.addEventListener("resize", () => {
        if (window.matchMedia("(max-width: 850px)").matches) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    });
    console.log(borderCountry)

    return (
        <WrapperCard>
            {
                country?.map(el => {
                        return <>
                            <BackButton onClick={() => navigation(-1)}><IoArrowBackSharp/> <span
                                style={{marginLeft: '5px'}}>Back</span> </BackButton>
                            <DetailsCard>
                                <CountryImage src={el.flag}/>
                                <CardInformationWrapper>
                                    <h3>{el.name}</h3>
                                    <CardInformation>
                                        <span>
                                            <b style={styleDisruptionTitle}> Native Name:</b> {el.nativeName}
                                        </span>
                                        <span>
                                            <b style={styleDisruptionTitle}> Population:</b> {el.population}
                                        </span>
                                        <span>
                                            <b style={styleDisruptionTitle}> Region:</b> {el.region}
                                        </span>
                                        <span>
                                            <b style={{marginRight: '0.3rem', fontWeight: 'var(--fw-bold)'}}> Sub
                                                Region:</b> {el.subregion}
                                        </span>
                                        <div>
                                            <b style={styleDisruptionTitle}> Capital:</b> {el.capital}
                                        </div>
                                        {isMobile && <div style={{height: "3rem"}}/>}
                                        <span>
                                            <b style={styleDisruptionTitle}> Top Level
                                                Domain:</b> {el.topLevelDomain.map(el => el)}
                                        </span>
                                        <span>
                                            <b style={styleDisruptionTitle}> Currencies:</b> {el.currencies.map(el => el.name)}
                                        </span>
                                        <span>
                                            <b style={styleDisruptionTitle}> Capital:</b> {el.capital}
                                        </span>
                                        <span>
                                            <b style={{
                                                marginRight: '0.3rem', fontWeight: 'var(--fw-bold)'
                                            }}> Languages:</b>
                                            {el.languages.map(({name}, index) => (
                                                <span key={name} style={{marginRight: '0.3rem'}}>
                                            {name}{index === el.languages.length - 1 ? " " : ","}{' '}
                                        </span>
                                            ))}
                                        </span>
                                    </CardInformation>
                                    <BordersGroup>
                                        <span style={styleDisruptionTitle}>Borders Countries: </span>
                                      <Meta>
                                          {
                                              borderCountry.map && borderCountry.map((m, index) => (<BorderCountry onClick={() => nav(`/country/${m.name}`)} key={m.name}>{m.name}
                                              </BorderCountry>))
                                          }
                                      </Meta>
                                    </BordersGroup>
                                </CardInformationWrapper>
                            </DetailsCard></>})}
        </WrapperCard>

    );
};

export default Details;