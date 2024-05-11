import React from 'react'
import styled ,{keyframes} from 'styled-components'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Container=styled.div`
    color: white;
    position: relative;
    width: 100%;
    background-color: rgba(0,0,0,0.3);
    border-radius: 1.2rem;
    border: solid 0.5px rgba(255,255,255,0.1) ;
    box-shadow: rgba(0,0,0,0.7) 0px 0px 20px 10px;
    `;

const InnerContainer=styled.div`
    color: white;
    position: relative;
    padding: 85% 0%;
    margin: 1%;
    background-color: #202020;
    border-radius: 1rem;
    opacity: 0.7;
    border: solid 0.5px rgba(255,255,255,0.1) ;
    cursor: pointer;
    transition: all 0.5s ease;
`;
const Line=styled.div`
  margin: auto;
  background-color: white;
  background: linear-gradient(to right, rgba(255,255,255,0.1), white, rgba(255,255,255,0.1));
  width: 80%;
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

const Img=styled.img`
    position: absolute;
    /* left: 20%; */
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    border-radius: 17px;

`;

export default function Profile() {
    // const data=props.data;
  return (
    <Container>
      <Line/>
      <InnerContainer>
        <Line2/>
          <Img src="./profile-transformed.png"/>
      </InnerContainer>
    </Container>
  )
}
