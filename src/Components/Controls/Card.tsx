import React from 'react'
import styled from 'styled-components'
import {InfoType} from "../../App";

const Wrapper = styled.article`

  border-radius: var(--radius);
  background-color: var(--color-ui-base);
  cursor: pointer;
  display: inline-block;
  margin: 0 auto;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
`

const CardImage = styled.img`
  border-radius: var(--radius);
  width: 250px;
  height: 150px;
  @media (max-width: 766px) {
    width: 400px;
    height: 350px;
  }

`
const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`
const CardTitle = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`
const CardList = styled.ul`
  padding: 0;
  list-style: none;
`
const CardListItem = styled.li`
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold)
  }
`


export type CardBodyType = {
    img: string
    countryName: string,
    info: InfoType[]
}

const Card = (props: CardBodyType) => {
    return (
        <Wrapper /*onClick={props.onClickCard}*/ >
            <CardImage src={props.img}/>
            <CardBody>
                <CardTitle>{props.countryName}</CardTitle>
                <CardList>
                    {props.info.map(item => (
                        <CardListItem key={item.title}>
                            <b>{item.title}:</b> {item.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    )
}

export default Card