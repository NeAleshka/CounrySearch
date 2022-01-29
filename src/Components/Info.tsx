import React, {useState} from 'react'
import {CountryForDetails} from "../pages/Details";
import styled from "styled-components";


export const styleDisruptionTitle = {
    marginRight: '0.3rem',
    fontWeight: 'var(--fw-bold)'
}

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
type InfoType = {
    info: CountryForDetails
}

const Info = ({info}: InfoType) => {
    const [isMobile, setIsMobile] = useState(false)
    window.addEventListener("resize", () => {
        if (window.matchMedia("(max-width: 850px)").matches) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    });
    return (
        <CardInformation>
            <span>
                <b style={styleDisruptionTitle}> Native Name:</b> {info.nativeName}
                                        </span>
            <span>
                <b style={styleDisruptionTitle}> Population:</b> {info.population.toLocaleString()}
                                        </span>
            <span>
                <b style={styleDisruptionTitle}> Region:</b> {info.region}
                        </span>
            <span>
                <b style={{marginRight: '0.3rem', fontWeight: 'var(--fw-bold)'}}> Sub
                                                Region:</b> {info.subregion}
            </span>
            <div>
                <b style={styleDisruptionTitle}> Capital:</b> {info.capital}
            </div>
            {isMobile && <div style={{height: "3rem"}}/>}
            <span>
                <b style={styleDisruptionTitle}> Top Level Domain:</b> {info.topLevelDomain.map(el => el)}
            </span>
            <span>
                <b style={styleDisruptionTitle}> Currencies:</b> {info.currencies.map((el,index)=> <span key={el.name} style={{marginRight: '0.3rem'}}>
                        {el.name}{index === info.languages.length - 1 ? " " : ","}{' '}
                    </span>)}
            </span>
            <span>
                <b style={styleDisruptionTitle}> Capital:</b> {info.capital}
            </span>
            <span>
                <b style={{
                    marginRight: '0.3rem', fontWeight: 'var(--fw-bold)'
                }}> Languages:</b>
                {info.languages.map(({name}, index) => (
                    <span key={name} style={{marginRight: '0.3rem'}}>
                        {name}{index === info.languages.length - 1 ? " " : ","}{' '}
                    </span>
                ))}
                        </span>
        </CardInformation>
    )
}

export default Info