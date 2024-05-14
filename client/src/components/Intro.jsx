import React from 'react'
import styled ,{keyframes} from 'styled-components'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { mobile, smallscreen } from '../responsive';
import { positions } from '@mui/system';

const Container=styled.div`
    color: white;
    position: relative;
    width: 75%;
    background-color: rgba(0,0,0,0.3);
    border-radius: 2rem;
    border: solid 0.5px rgba(255,255,255,0.1) ;
    box-shadow: rgba(0,0,0,0.7) 0px 0px 20px 10px;
    border-bottom: none;
    ${smallscreen({display:'none'})}
    `;

const InnerContainer=styled.div`
    color: white;
    position: relative;
    padding: 27% 0%;
    margin: 1%;
    background-color: rgba(255,255,255,0.02);
    border-radius: 1.5rem;
    border: solid 0.5px rgba(255,255,255,0.1) ;
    border-bottom: none;
`;
const Line=styled.div`
  margin: auto;
  background-color: white;
  background: linear-gradient(to right, rgba(255,255,255,0.1), white, rgba(255,255,255,0.1));
  width: 90%;
  height: 0.8px;
`;

const Line2=styled.div`
  position: absolute;
  margin: auto;
  background-color: white;
  background: linear-gradient(to right, rgba(255,255,255,0.07), white, rgba(255,255,255,0.07));
  width: 70%;
  height: 0.7px;
  top: 0px;
  left: 15%;
  box-shadow: white 0px 100px 1000px 5px;
`;

const Content=styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0px;
`;

const Text1=styled.div`
  font-size: 2vw;
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 0 0 2.5px #fff, 0 0 20px #fff;
`;

const Text2=styled.div`
  width: 100%;
  text-align: center;
  padding: 0px 60px;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  font-size: 3vw;
  color: orange;
  margin-top: 20px;
`;

const AnimateArrow=keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(30px); }
`;
const Arrow=styled.div`
  position: absolute;
  ${mobile({position:'relative'})}
  bottom: 10%;
  animation: ${AnimateArrow} 1.5s ease-in-out infinite;
`;

const MobileContainer=styled.div`
  width: 80%;
  display: none;
  ${smallscreen({display:'flex'})}
  flex-direction: column;
  align-items: left;
  gap: 20px;
  /* position: relative; */
`;

const Heading=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  color: rgba(255,255,255,0.7);
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2px;
`;

const Circle=styled.div`
  width: 12px;
  height: 12px;
  ${mobile({width:'7px',height:'7px'})}
  box-shadow: white 0px 0px 10px 2px;
  background-color: white;
  border-radius: 50%;
`;

export default function Intro() {
  return (
    <>
      <Container>
        <Line/>
        <InnerContainer>
          <Line2/>
            <Content>
              <Text1>I’m not a <span style={{color:'orange',textShadow:'0 0 2.5px #fff, 0 0 20px orange'}}>great</span> programmer, I’m just a good programmer with great habits.</Text1>
              <Text2>- Hii!, I'm Anurag -</Text2>
              <Arrow><ArrowDownwardIcon fontSize='large'/></Arrow>
            </Content>
        </InnerContainer>
      </Container>
      <MobileContainer>
        <Heading>
          <Circle/><span>Anurag Goel<br></br><span style={{color:'rgba(255,255,255,0.5)'}}>CSE Undergrad '25 @IIT Dharwad</span></span>
        </Heading>
        <Text1 style={{fontSize:'4vw'}}>I’m not a great programmer, I’m just a good programmer with great habits.</Text1>
        <Text2 style={{fontSize:'4vw',marginTop:'-10px'}}>- Hii!, I'm Anurag -</Text2>
        <ArrowDownwardIcon fontSize='small' style={{margin:'auto'}}/>
      </MobileContainer>
    </>
  )
}
