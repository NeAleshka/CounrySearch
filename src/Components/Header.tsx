import React, {useEffect, useState} from 'react'
import {Container} from "./Container";
import styled from "styled-components";
import {IoMoon,IoSunny}from 'react-icons/io5'

const HeaderEl = styled.header`
background-color: var(--color-ui-base);
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-text);
  padding: 2rem 0;
  font-size: var(--fs-md);
`
const HeaderTitle=styled.a.attrs({href:'/'})`
  color: var(--color-text);
  font-weight: var(--fw-bold);
  cursor: pointer;
  text-decoration: none;
`
const ThemeSwitcher=styled.div`
  color: var(--color-text);
  font-weight: var(--fw-bold);
  cursor: pointer;
`
const LightMode='Light'
const DarkMode='Dark'

const Header = () => {
    const [theme,setTheme]=useState(LightMode)
    useEffect(()=>{
        document.body.setAttribute("data-theme",theme)
    },[theme])

    const toggleSwitcher = () => {
      setTheme(theme===LightMode?DarkMode:LightMode)
    }

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <HeaderTitle>Where in the World? </HeaderTitle>
                    <ThemeSwitcher onClick={toggleSwitcher}>
                        {theme===LightMode?<IoSunny/>:<IoMoon/>}
                        <span style={{marginLeft:'0.5rem'}}>{theme} Theme</span>
                    </ThemeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}

export default Header