import React, {useEffect, useState} from 'react'
import {Container} from "./Container";
import styled from "styled-components";
import {IoMoon,IoSunny}from 'react-icons/io5'
import {Outlet} from 'react-router-dom'
import {useNavigate} from "react-router";

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
const HeaderTitle=styled.div`
  color: var(--color-text);
  font-weight: var(--fw-bold);
  cursor: pointer;
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

    const navigate = useNavigate()
    const headerTitleClickHandler = () => {
        navigate("/")
    }

    return (
        <>
            <HeaderEl>
                <Container>
                    <Wrapper>
                        <HeaderTitle onClick={headerTitleClickHandler}>Where in the World? </HeaderTitle>
                        <ThemeSwitcher onClick={toggleSwitcher}>
                            {theme===LightMode?<IoSunny/>:<IoMoon/>}
                            <span style={{marginLeft:'0.5rem'}}>{theme} Theme</span>
                        </ThemeSwitcher>
                    </Wrapper>
                </Container>
            </HeaderEl>
        <Outlet/>
        </>

    )
}

export default Header