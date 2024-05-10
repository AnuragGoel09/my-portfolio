import React from 'react'
import styled  from 'styled-components'
import Intro from '../components/Intro';
import Internship1 from '../components/Internship1';
import Project from '../components/Project';

const Container=styled.div`
    margin: 100px 0px 40px 0px;
    background-color: transparent;
    min-height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 80px;
`;

export default function Work() {
  return (
    <>
    <Container>
        <Intro/>
        {/* <Internship1/> */}
        <Project data={{
          title:"What To Wear - Cloth Recommender Based on Weather",
          type:"A Weather API based application for real time weather information and cloth recommender based on weather , classified based on K-nearest-neighbor algorithm.",
          img:"./project1.png"
          }}/>
        <Project data={{
          title:"MyNotebook - Notes and Checklist taking web-app",
          type:"A MERN stack application to take notes and write a checklist that helps to manage work.",
          img:"./project1.png"
          }}/>
          
    </Container>
    </>
  )
}
