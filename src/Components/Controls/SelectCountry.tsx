import Select from "react-select";
import styled from "styled-components";



export const SelectCountry = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--color-ui-base)',
            color: 'var (--color-text)',
            padding: '0.25rem',
            border: 'none',
            height: '50px'
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var (--color-text)',
            backgroundColor: state.isSelected ? 'var (--color-bg)' : "var (--color-ui-base)",
        })
    }
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;
`

