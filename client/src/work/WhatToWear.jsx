import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Container ,ButtonLine, Back, Title, Company, Overview, Left, Right, Links, GithubLink} from './Components';
import Highlights from '../components/Highlights';

const ColorLight=styled.div`
  margin: auto;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color:rgba(12,21,66,1);
  box-shadow: rgba(12,21,66,1) 0px 0px 1200px 450px;
`;

export default function WhatToWear() {

  const navigate=useNavigate();
  const data={
    context:"Automate the process of KYC using pancard identification number",
    videos:[{
      video:"./videos/pancardocr1.mp4",
      caption:"pan number extraction"
    },]}

  return (
    <>
      <Container>
        <ColorLight/>
        <ButtonLine>
          <Back onClick={()=>navigate("/")}><ArrowBackIcon/>Back</Back>
          <Back onClick={()=>navigate("/pancard-ocr")}>Next Project<ArrowForwardIcon/></Back>
        </ButtonLine>
        <Title>
          What To Wear
        </Title>
        <Company>
          Ebix Cash &ndash; December 2022
        </Company>
        <Overview>
        <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white'}}>Overview</div>
        My project involves creating a portal that facilitates Optical Character Recognition (OCR) of PAN cards and extracts PAN numbers for Know Your Customer (KYC) purposes, catering specifically to the needs of companies. By leveraging OCR technology, the portal automates the extraction process, allowing for swift and accurate retrieval of PAN numbers from scanned or uploaded PAN cards. This solution streamlines the KYC process for businesses, enhancing efficiency and reducing manual effort. With a focus on accuracy and reliability, the portal serves as a valuable tool for companies seeking to verify customer identities and comply with regulatory requirements seamlessly.
        </Overview>

        <Overview style={{display:'flex',justifyContent:'space-between'}}>
          <Left>
            <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white'}}>Timeline & Status</div>
            <div>1 Month, <span style={{color:'white',textShadow:'0px 0px 3px white'}}>Launched in December 2022</span></div>
          </Left>   
          <Right>
            <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white',textAlign:'right'}}>Technologies</div>
            <div style={{justifyContent:'right',display:'flex',alignItems:'center',gap:'10px'}}>Python 3 <img width={'20px'} src="./python-icon.png" /></div>
            <div style={{justifyContent:'right',display:'flex',alignItems:'center',gap:'10px'}}>EasyOCR </div>
          
          </Right> 
        </Overview>
        <Highlights data={data}/>
        <Links>
        <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white',fontSize:'14px'}}>USEFUL LINKS</div>
        <GithubLink target="_blank" href="https://github.com/AnuragGoel09/pancard-number-extractor-api"><GitHubIcon/>Github Repo</GithubLink>
        </Links>
      </Container>
    </>
  )
}
