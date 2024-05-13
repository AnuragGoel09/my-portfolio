import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Highlight from '../components/VCSHighlight';
const Container=styled.div`
  width: 100%;
  height: 400vh;
  background:rgba(21,26,27,1);
  font-family: Arial, Helvetica, sans-serif;
`;

const ColorLight=styled.div`
  margin: auto;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color:rgba(255,255,255,0.1);
  box-shadow: rgba(255,255,255,0.08) 0px 0px 1200px 450px;
  /* box-shadow: rgba(5,60,47,0.7) 0px 0px 1600px 600px; */
`;

const ButtonLine=styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  position: fixed;
`;

const Back=styled.div`
    color: white;
    background-color: rgba(255,255,255,0.1);
    padding: 10px 22px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 2px;
    margin-left: 50px;
    &:hover{
      background-color: rgba(255,255,255,0.2);
    }
    cursor: pointer;
    box-shadow: rgba(0,0,0,0.4) 0px 0px 30px 1px;
`;
const Title=styled.div`
  margin-top: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  font-size: 45px;
  text-shadow: 0 0 4px #fff;
`;
const Company=styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.8);
  font-size: 18px;
`;

const Overview=styled.div`
  width: 60%;
  margin: auto;
  margin-top: 50px;
  color: rgba(255,255,255,0.7);
  line-height: 25px;
`;

const Left=styled.div``;

const Right=styled.div``;

export default function VersionControlSystem() {

  const navigate=useNavigate();

  return (
    <>
      <Container>
        <ColorLight/>
        <ButtonLine>
          <Back onClick={()=>navigate("/")}><ArrowBackIcon/>Back</Back>
        </ButtonLine>
        <Title>
          Version Control System (VCS)
        </Title>
        <Company>
          Personal Project &ndash; June 2024
        </Company>
        <Overview>
        <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white'}}>Overview</div>
        VCS is a Python-based version control system designed to offer a streamlined yet robust solution for managing project source code. With functionalities inspired by popular VCS platforms like Git , VCS enables users to track changes, create commits, and explore project history with ease. Built on a foundation of simplicity and efficiency, VCS provides developers with a lightweight yet effective tool for maintaining project integrity and collaboration.
        </Overview>

        <Overview style={{display:'flex',justifyContent:'space-between'}}>
          <Left>
            <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white'}}>Timeline & Status</div>
            <div>1 Month, <span style={{color:'white',textShadow:'0px 0px 3px white'}}>Launched in May 2024</span></div>
          </Left>   
          <Right>
            <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white',textAlign:'right'}}>Technologies</div>
            <div style={{textAlign:'right',display:'flex',alignItems:'center',gap:'10px'}}>Python 3 <img width={'30px'} src="./python-icon.png" /></div>
          
          </Right> 
        </Overview>
        <Highlight/>

      </Container>
    </>
  )
}
