import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Highlight from '../components/Highlights';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Container ,ButtonLine, Back, Title, Company, Overview, Left, Right, Links, GithubLink} from './Components';
import Highlights from '../components/Highlights';


const ColorLight=styled.div`
  margin: auto;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color:rgba(255,255,255,0.1);
  box-shadow: rgba(255,255,255,0.08) 0px 0px 1200px 450px;
`;


export default function VersionControlSystem() {

  const navigate=useNavigate();

  const data={
    context:"A lightweight version control system written in Python, inspired by Git &mdash; provides basic commands for managing project’s version history",
    videos:[{
      video:"./videos/vcs1.mp4",
      caption:"vcs commit"
    },{
      video:"./videos/vcs2.mp4",
      caption:"vcs restore"
    },]
  }

  return (
    <>
      <Container>
        <ColorLight/>
        <ButtonLine>
          <Back onClick={()=>navigate("/")}><ArrowBackIcon/>Back</Back>
          <Back onClick={()=>navigate("/pancard-ocr")}>Next Project<ArrowForwardIcon/></Back>
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
        <Highlights data={data} />
        <Links>
        <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white',fontSize:'14px'}}>USEFUL LINKS</div>
        <GithubLink target="_blank" href="https://github.com/AnuragGoel09/version-control-system"><GitHubIcon/>Github Repo</GithubLink>
        </Links>
      </Container>
    </>
  )
}
