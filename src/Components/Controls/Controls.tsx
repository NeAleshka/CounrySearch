import React, {useState} from 'react'
import styled from 'styled-components'
import Search from "./Search";
import { SelectCountry} from "./SelectCountry";




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

const option=[
    {value:'Africa',label:'Africa'},
    {value:'America',label:'America'},
    {value:'Asia',label:'Asia'},
    {value:'Europe',label:'Europe'},
    {value:'Oceania',label:'Oceania'},
]

const Controls = () => {
    const [search, setSearch] = useState('')

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <SelectCountry options={option} placeholder='Filter by Region' isClearable
            isSearchable={false}/>
        </Wrapper>

    )
}

export default Controls