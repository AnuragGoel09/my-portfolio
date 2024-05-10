import React from 'react'
import styled  from 'styled-components'
import Intro from '../components/Intro';
import Internship1 from '../components/Internship1';
import Project from '../components/Project';

const Container=styled.div`
    margin: 40px 0px 40px 0px;
    background-color: transparent;
    min-height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 80px;
`;

export default function Info() {
  return (
    <>
    <Container>
        <Intro/>
        {/* <Internship1/> */}
        <Project/>
    </Container>
    </>
  )
}
