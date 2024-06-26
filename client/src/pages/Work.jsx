import React from 'react'
import styled  from 'styled-components'
import Intro from '../components/Intro';
import Internship1 from '../components/Internship1';
import Project from '../components/Project';
import Navbar from '../components/Navbar';

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
    <Navbar/>
    <Container>
        <Intro/>
        <Project data={{
          title:"Version Control System (VCS)",
          type:"A lightweight version control system written in Python, inspired by Git, which provides basic commands for managing your project’s version history.",
          img:"./version-control-system.jpg",
          tech:["./python-icon.png"],
          back:"linear-gradient(180deg, rgba(51,53,61,1) 0%, rgba(21,26,27,1) 65%)",
          link:'/version-control-system'
          }}/>
        <Internship1 data={{
          title:"Pancard OCR",
          company:"Ebix Cash, '22",
          type:"Automate the process of KYC using pancard identification number",
          img:"./pancard-extractor.png",
          tech:["./python-icon.png"],
          back:"linear-gradient(180deg, rgba(5,60,47,1) 0%, rgba(21,26,27,1) 65%)",
          link:'/pancard-ocr'
          }}/>
        <Project data={{
          title:"What To Wear - Cloth Recommender Based on Weather",
          type:"A Weather API based application for real time weather information and cloth recommender based on weather , classified based on K-nearest-neighbor algorithm.",
          img:"./what-to-wear.png",
          tech:["./react-icon.png","./material-ui-icon.png"],
          back:"linear-gradient(180deg, rgba(12,21,66,1) 0%, rgba(21,26,27,1) 65%)",
          link:'/what-to-wear'
          }}/>
        <Project data={{
          title:"MyNotebook - Notes and Checklist taking web-app",
          type:"A MERN stack application to take notes and write a checklist that helps to manage work.",
          img:"./my-notebook.png",
          tech:["./react-icon.png","node-icon.jpg","material-ui-icon.png","./mongo-icon.png","./express-icon.png"],
          back:"linear-gradient(180deg, rgba(35,14,94,1) 0%, rgba(21,26,27,1) 65%)",
          link:'/my-notebook'
          }}/>
          
    </Container>
    </>
  )
}
