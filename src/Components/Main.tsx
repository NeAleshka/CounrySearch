import React from 'react'
import {Container} from "./Container";
import Controls from "./Controls/Controls";
import styled from "styled-components";


const Wrapper = styled.main`
  padding: 2rem 0;
  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`

const Main = ({children}: any) => {
    return (
        <Container>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    )
}

export default Main