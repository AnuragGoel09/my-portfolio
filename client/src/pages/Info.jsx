import React from 'react'
import styled  from 'styled-components'
import Intro from '../components/Intro';

const Container=styled.div`
    margin-top: 40px;
    background-color: transparent;
    min-height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export default function Info() {
  return (
    <>
    <Container>
        <Intro/>
    </Container>
    </>
  )
}
