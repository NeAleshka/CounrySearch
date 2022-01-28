import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Search from "./Search";
import {SelectCountry} from "./SelectCountry";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 766px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const option: { value: string, label: string }[] = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
]

export type OptionType = {
    value: string,
    label: string
}

type ControlsType = {
    handlerSearch: (search: string, region: string) => void
}

const Controls = (props: ControlsType) => {
    const [search, setSearch] = useState('')
    const [region, setRegion] = useState({value: '', label: ''})

    useEffect(() => {
        props.handlerSearch(search, region?.value ?? '')

    }, [search, region])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <SelectCountry options={option} placeholder='Filter by Region' isClearable
                           isSearchable={false}
                           value={region?.value === '' ? null : region}
                           onChange={(e) => {
                               setRegion(e as OptionType)
                           }}
            />
        </Wrapper>

    )
}

export default Controls