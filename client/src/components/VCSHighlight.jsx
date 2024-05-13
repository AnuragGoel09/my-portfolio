import React from 'react'
import styled from 'styled-components'
import FlareIcon from '@mui/icons-material/Flare';
import GitHubIcon from '@mui/icons-material/GitHub';

const Container=styled.div`
    width: 100%;
    margin: auto;
    margin-top: 100px;
`;

const Box=styled.div`
    width: 65%;
    margin: auto;
    background-color: rgba(0,0,0,0.1);
    border-radius: 26px;
    box-shadow: rgba(0,0,0,0.8) 0px 0px 60px 6px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Line=styled.div`
    width: 60%;
    position: absolute;
    height: 1px;
    background-color: cyan;
    box-shadow: cyan 0px 0px 300px 10px;
    left: 20%;
    border-radius: 50%;
`;

const Icon=styled.div`
    margin-top: 40px;
    color: cyan;
    background-color: rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items:center ;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: solid 2px cyan ;
    
`;

const Head=styled.div`
    margin-top: 30px;
    font-size: 13px;
    color: cyan;
`;

const Context=styled.div`
    width: 90%;
    margin: auto;
    margin-top: 40px;
    color: white;
    font-size: 25px;
    text-align: center;
    line-height: 35px;
`;

const VideoBox=styled.div`
    margin: 30px;
    padding: 20px;
    padding-top: 50px;
    background-color: rgba(255,255,255,0.06);
    border-radius: 30px;
    box-shadow:inset 0 -250px 120px rgba(0,0,0,0.4);
    border: solid 0.5px grey;
`;

const Video=styled.video`
    width: 100%;
    border-radius: 10px;
`;

const Caption=styled.div`
    width: 90%;
    margin-top: -15px;
    display: flex;
    justify-content: right;
    align-items: center;
    color: grey;
    font-size: 13px;
    gap: 10px;
    margin-bottom: 10px;
`;


const Links=styled.div`
    width: 60%;
    margin: auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const GithubLink=styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 5px;
    color: white;
    /* background-color: rgba(255,255,255,0.1); */
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    &:hover{
        background-color: rgba(255,255,255,0.1);     
    }
    border: solid 0.5px cyan;
`;

export default function VCSHighlight() {
  return (
    <Container>
        <Box>
            <Line/>
            <Icon>
                <FlareIcon fontSize='medium'/>
            </Icon>
            <Head>HIGHLIGHTS</Head>
            <Context>
                A lightweight version control system written in Python, inspired by Git &mdash; provides basic commands for managing project’s version history
            </Context>
            <VideoBox>
                <Video src="./videos/vcs1.mp4" controls={false} loop autoPlay muted/>
            </VideoBox>
            <Caption>vcs commit <div style={{fontWeight:'bold',padding:'7px',backgroundColor:'rgba(255,255,255,0.1)',fontSize:'10px',borderRadius:'10px'}}>VIDEO LOOP</div></Caption>
            <VideoBox>
                <Video src="./videos/vcs2.mp4" controls={false} loop autoPlay muted/>
            </VideoBox>
            <Caption>vcs restore <div style={{fontWeight:'bold',padding:'7px',backgroundColor:'rgba(255,255,255,0.1)',fontSize:'10px',borderRadius:'10px'}}>VIDEO LOOP</div></Caption>
        </Box>
        <Links>
        <div style={{color:'white',marginBottom:'10px',textShadow:'0px 0px 1.5px white',fontSize:'14px'}}>USEFUL LINKS</div>
        <GithubLink><GitHubIcon/>Github Repo</GithubLink>
        </Links>
    </Container>
  )
}
