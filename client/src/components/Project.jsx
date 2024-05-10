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
    `;

const InnerContainer=styled.div`
    color: white;
    position: relative;
    padding: 30% 0%;
    margin: 1%;
    background-color: #202020;
    border-radius: 1.5rem;
    opacity: 0.7;
    border: solid 0.5px rgba(255,255,255,0.1) ;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        border-color: white;
        background-color:rgba(255,255,255,0.01);
    }
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
  justify-content: start;
  top: 0;
  left: 0px;
  gap: 8px;
`;

const Light=styled.div`
    height: 0.5px;
    width: 50%;
    opacity: 0.7;
    background-color: white;
    box-shadow: white 0px 5px 20px 4px;
`;

const Category=styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 10px;
    right: 15px;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: rgba(255,255,255,0.4);
    letter-spacing: 1.5px;
`;

const Title=styled.div`
    margin-top: 10px;
    width: 100%;
    text-align: left;
    font-size: 24px;
    color: rgba(255,255,255,0.8);
    font-family: Arial, Helvetica, sans-serif;
`;
const Type=styled.div`
    width: 100%;
    text-align: left;
    font-size: 20px;
    color: rgba(255,255,255,0.4);
    font-family: monospace;
`;

const ProjectImg=styled.img`
    position: absolute;
    bottom: 0;
    width: 75%;
    border-radius: 10px 10px 0px 0px;
    border: solid 1px rgba(255,255,255,0.1) ;
    border-bottom: none;
`;

// const Text1=styled.div`
//   font-size: 70px;
//   color: whitesmoke;
//   font-family: Arial, Helvetica, sans-serif;
//   text-shadow: 0 0 2px rgba(255,255,255,0.1), /* Adjust the color and spread radius as needed */
//                  0 0 4px rgba(255,255,255,0.5);
// `;

// const Text2=styled.div`
//   width: 100%;
//   text-align: center;
//   padding: 0px 60px;
//   font-family: Arial, Helvetica, sans-serif;
//   box-sizing: border-box;
//   font-size: 40px;
//   color: orange;
//   margin-top: 20px;
// `;

const AnimateArrow=keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(30px); }
`;
// const Arrow=styled.div`
//   position: absolute;
//   bottom: 10%;
//   animation: ${AnimateArrow} 1.5s ease-in-out infinite;
// `;

export default function Project(props) {
    const data=props.data;
  return (
    <Container>
      <Line/>
      <InnerContainer>
        <Line2/>
          <Content>
            <Category>Project</Category>
            <Title>{data.title}</Title>
            <Type>{data.type}</Type>
            <ProjectImg src={data.img} />
            </Content>
      </InnerContainer>
    </Container>
  )
}
