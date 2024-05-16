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
    context:"Style yourself based on whether and make your comfort longlasting",
    videos:[{
      video:"./videos/wtw1.mp4",
      caption:"allow location"
    },{
      video:"./videos/wtw2.mp4",
      caption:"clothing advise"
    }]}

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
          Personal Project &ndash; March 2023
        </Company>
        <Overview>
        <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white'}}>Overview</div>
        My project seamlessly integrates user interface design with real-time weather data, leveraging the power of machine learning to provide personalized clothing recommendations. By connecting to a weather API, we gather up-to-the-minute weather information, enabling users to make informed decisions about their attire. Our innovative approach goes beyond simple weather forecasts—it analyzes various factors such as temperature, humidity, and wind speed, utilizing machine learning algorithms to suggest the most suitable clothing options for any weather condition. Whether it's a sunny day or a sudden downpour, our application ensures that users are always dressed appropriately, combining practicality with cutting-edge technology. 
        </Overview>

        <Overview style={{display:'flex',justifyContent:'space-between'}}>
          <Left>
            <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white'}}>Timeline & Status</div>
            <div>1 Month, <span style={{color:'white',textShadow:'0px 0px 3px white'}}>Launched in March 2023</span></div>
          </Left>   
          <Right>
            <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white',textAlign:'right'}}>Technologies</div>
            <div style={{justifyContent:'right',display:'flex',alignItems:'center',gap:'10px'}}>ReactJs <img width={'20px'} src="./logo192.png" /></div>
            <div style={{justifyContent:'right',display:'flex',alignItems:'center',gap:'10px'}}>Machine Learning (KNN Algorithm) <img width={'20px'} src="./machine.png" alt="" /> </div>
          
          </Right> 
        </Overview>
        <Highlights data={data}/>
        <Links>
        <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white',fontSize:'14px'}}>USEFUL LINKS</div>
        <GithubLink target="_blank" href="https://github.com/AnuragGoel09/What-to-wear"><GitHubIcon/>Github Repo</GithubLink>
        <GithubLink target="_blank" href="https://anuraggoel09.github.io/What-to-wear/"><img src="./web.png" width={'30px'} alt="" />Web-App Link</GithubLink>
        </Links>
      </Container>
    </>
  )
}
