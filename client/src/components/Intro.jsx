import React from 'react'
import styled ,{keyframes} from 'styled-components'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Container=styled.div`
    color: white;
    position: relative;
    width: 75%;
    background-color: rgba(0,0,0,0.3);
    border-radius: 2rem;
    border: solid 0.5px rgba(255,255,255,0.1) ;
    box-shadow: rgba(0,0,0,0.7) 0px 0px 20px 10px;
    border-bottom: none;
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
  font-size: 70px;
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 0 0 2px rgba(255,255,255,0.1), /* Adjust the color and spread radius as needed */
                 0 0 4px rgba(255,255,255,0.5);
`;

const Text2=styled.div`
  width: 100%;
  text-align: center;
  padding: 0px 60px;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  font-size: 40px;
  color: orange;
  margin-top: 20px;
`;

const AnimateArrow=keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(30px); }
`;
const Arrow=styled.div`
  position: absolute;
  bottom: 10%;
  animation: ${AnimateArrow} 1.5s ease-in-out infinite;
`;

export default function Intro() {
  return (
    <Container>
      <Line/>
      <InnerContainer>
        <Line2/>
          <Content>
            <Text1>I’m not a great programmer; I’m just a good programmer with great habits.</Text1>
            <Text2>- Hii!, I'm Anurag -</Text2>
            <Arrow><ArrowDownwardIcon fontSize='large'/></Arrow>
          </Content>
      </InnerContainer>
    </Container>
  )
}
