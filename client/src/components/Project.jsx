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
    /* opacity: 0.7; */
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
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: solid 1px rgba(255,255,255,0.1) ;
    border-bottom: none;
    border-radius: 13px 13px 0px 0px;
    z-index: 1;
    `;

const ImgContainer=styled.div`
    position: absolute;
    bottom: 0%;
    width: 75%;
    padding: 22% 0%;
    background-color: #202020;
    border-radius: 13px 13px 0px 0px;
    border: solid 0.5px rgba(255,255,255,0.3) ;
    border-bottom: none;
    box-shadow: black 0px 30px 50px 10px;
`;

const Bar=styled.div`
  position: absolute;
  top: 0;
  background-color: #202020;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  box-sizing: border-box;
  height: 23px;
  gap: 6px;
  z-index: 2;
  border-radius: 13px 13px 0px 0px;
`;

const Circle=styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  `;

const Technology=styled.div`
  height: 35px;
  display: flex;
  justify-content: end;
  gap: 20px;
`;

const Icon=styled.img`
  height: 100%;
  border-radius: 10px;
`;

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
            <Technology>
              {data.tech.map((item)=>(
                <Icon src={item}/>
              ))}
            </Technology>
            <ImgContainer>
              <Bar>
                <Circle style={{backgroundColor:'red'}}/>
                <Circle style={{backgroundColor:'orange'}}/>
                <Circle style={{backgroundColor:'green'}}/>
              </Bar>
              <ProjectImg src={data.img} />
            </ImgContainer>
            </Content>
      </InnerContainer>
    </Container>
  )
}
