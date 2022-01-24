import React from 'react'
import styled from "styled-components";
import {IoSearch} from 'react-icons/io5'

type SearchType = {
    search: string
    setSearch: (search: string) => void
}

const InputContainer = styled.label`
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  font-size: var(--fs-sm);
  color: var(--color-text);
  background-color: var(--color-ui-base);
  padding: 1rem 2rem;
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 766px) {
    margin-bottom: 0;
    width: 300px;
  }

`

const InputSearch = styled.input.attrs({
    type: "search",
    placeholder: 'Search country...'
})`
  outline: none;
  border: none;
  background-color: var(--color-ui-base);
  color: var(--color-text);
  width: 100%;
  @media (min-width: 766px) {
  width: 300px;
}
`

const Search = ({search, setSearch, ...rest}: SearchType) => {
    return (
        <InputContainer>
            <IoSearch/>
            <InputSearch onChange={(e) => setSearch(e.target.value)}
                         value={search}/>
        </InputContainer>
    )
}

export default Search