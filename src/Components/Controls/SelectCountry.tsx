import Select from "react-select";
import styled from "styled-components";
import {OptionType} from "./Controls";




export const SelectCountry = styled(Select).attrs({
    styles: {
        singleValue:(provided)=>({
            ...provided,
            color: 'var(--color-text)',
        }),
        control: provided => ({
            ...provided,
            backgroundColor: 'var(--color-ui-base)',
            padding: '0.25rem',
            border: 'none',
            height: '50px',
            color: 'var(--color-text)',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var (--color-text)',
            backgroundColor: state.isSelected? 'var(--color-ui-base)':'var(--color-bg)'
        }),
    }
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;
  & > div[id]{
    background-color: var(--color-bg);
  }
`

