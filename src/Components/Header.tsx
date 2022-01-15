import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Container} from "./Container";
import {IoMoon, IoSunny} from 'react-icons/io5'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`
const HeaderTitle = styled.a.attrs({href: '/'})`
  text-decoration: none;
  color: var(--color-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`
const ThemeSwitcher = styled.div`
  cursor: pointer;
  color: var(--color-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`

const Header = () => {
    const [theme, setTheme] = useState('Light')
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    const ToggleSwitcher = () => {
        setTheme(theme === 'Light' ? 'Dark' : 'Light')
    }

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <HeaderTitle>Where in the World?</HeaderTitle>
                    <ThemeSwitcher onClick={ToggleSwitcher}>
                        {theme === 'Light' ? <IoSunny color={'black'} size={'14px'}/> : <IoMoon/>} <span
                        style={{marginLeft: '5px'}}>{theme} Theme</span></ThemeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}

export default Header