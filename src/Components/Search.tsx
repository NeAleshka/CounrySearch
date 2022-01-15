import React from 'react'
import styled from "styled-components";
import {IoSearch} from 'react-icons/io5'

const InputSearch = styled.input`
  font-family: var(--family);
  background-color: var(--color-ui-base);
  border: none;
  color: var(--color-text);
  outline: none;
  margin-left: 1.5rem;
  @media (max-width: 363px){
   margin-left: 0;
  }
`
const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 1rem 2rem;
  align-content: center;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  width: 100%;
  margin-bottom: 1.5rem;
  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 300px;
  }
  @media (max-width: 363px){
    .SearchIcon{
      display: none;
    }
  }
`

type SearchType = {
    search: string;
    setSearch: (search: string) => void
}

const Search = ({search, setSearch, ...rest}: SearchType) => {
    return (
        <InputContainer>
           <span className={"SearchIcon"}> <IoSearch/></span>
            <InputSearch onChange={(e) => setSearch(e.target.value)} value={search} placeholder={'Search a country'}/>
        </InputContainer>
    )
}

export default Search