import React from 'react'
import Controls from "./Controls";
import styled from "styled-components";
import {Container} from "./Container";


const WrapperMain = styled.main`
padding: 2rem 0;
  @media(min-width: 800px){
    padding: 4rem 0;
  }
`

const Main = ({children}:any) => {
    return (
        <WrapperMain>
    <Container>
        {children}
    </Container>
        </WrapperMain>

    )
}

export default Main