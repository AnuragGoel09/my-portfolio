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

export default function MyNotebook() {

  const navigate=useNavigate();
  const data={
    context:"Stay on top of every task detail with our MERN-powered My Notebook – where organization meets efficiency!",
    videos:[{
      video:"./videos/mynb1.mp4",
      caption:"create personlize notebook"
    },{
      video:"./videos/mynb2.mp4",
      caption:"create and manage notes"
    },{
        video:"./videos/mynb3.mp4",
        caption:"create and manage checklists"
    }]}

  return (
    <>
      <Container>
        <ColorLight/>
        <ButtonLine>
          <Back onClick={()=>navigate("/")}><ArrowBackIcon/>Back</Back>
          {/* <Back onClick={()=>navigate("/pancard-ocr")}>Next Project<ArrowForwardIcon/></Back> */}
        </ButtonLine>
        <Title>
          My Notebook
        </Title>
        <Company>
          Personal Project &ndash; August 2023
        </Company>
        <Overview>
        <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white'}}>Overview</div>
            The project My Notebookk is a robust tool designed to streamline notes and checklists management. It is build using the MERN stack, this application offers a seamless user experience with key features like user authentication, notes management,  checklist management, responsive design and some personalization functionality.
        </Overview>

        <Overview style={{display:'flex',justifyContent:'space-between'}}>
          <Left>
            <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white'}}>Timeline & Status</div>
            <div>2 Month, <span style={{color:'white',textShadow:'0px 0px 3px white'}}>Launched in August 2023</span></div>
          </Left>   
          <Right>
            <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white',textAlign:'right'}}>Technologies</div>
            <div style={{justifyContent:'right',display:'flex',alignItems:'center',gap:'10px'}}>ReactJs <img width={'20px'} src="./logo192.png" /></div>
            <div style={{justifyContent:'right',display:'flex',alignItems:'center',gap:'10px'}}>NodeJs <img width={'20px'} src="./node-icon.jpg" alt="" /> </div>
            <div style={{justifyContent:'right',display:'flex',alignItems:'center',gap:'10px'}}>MongoDb <img width={'20px'} src="./mongo-icon.png" alt="" /> </div>
            <div style={{justifyContent:'right',display:'flex',alignItems:'center',gap:'10px'}}>ExpressJs <img width={'20px'} src="./express-icon.png" alt="" /> </div>
          
          </Right> 
        </Overview>
        <Highlights data={data}/>
        <Links>
        <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white',fontSize:'14px'}}>USEFUL LINKS</div>
        <GithubLink target="_blank" href="https://github.com/AnuragGoel09/MyNotebook-Frontend"><GitHubIcon/>Github Repo (Frontent)</GithubLink>
        <GithubLink target="_blank" href="https://github.com/AnuragGoel09/MyNotebook-Backend"><GitHubIcon/>Github Repo (Backend)</GithubLink>
        <GithubLink target="_blank" href="https://mynotebook-frontend.onrender.com/"><img src="./web.png" width={'30px'} alt="" />Web-App Link</GithubLink>
        <div style={{fontSize:'13px',color:'whitesmoke'}}>Disclaimer : login might take time due to free server hosting</div>
        </Links>
      </Container>
    </>
  )
}
