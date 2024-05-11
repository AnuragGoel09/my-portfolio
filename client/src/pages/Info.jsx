import React from 'react'
import styled  from 'styled-components'
import Profile from '../components/Profile';
import { mobile } from '../responsive';

const Container=styled.div`
    margin: 100px 0px 40px 0px;
    background-color: transparent;
    min-height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 80px;
`;

const AboutMe=styled.div`
  width: 70%;
  ${mobile({width:'85%'})}
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
`;
const Heading=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  color: rgba(255,255,255,0.5);
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0.2px;
`;

const Circle=styled.div`
  width: 12px;
  height: 12px;
  box-shadow: white 0px 0px 10px 2px;
  ${mobile({width:'7px',height:'7px'})}
  background-color: white;
  border-radius: 50%;
`;

const Text1=styled.div`
  margin-top:5px ;
  padding: 20px;
  width: 100%;
  font-size: 40px;
  color: orange;
  ${mobile({fontSize:'20px'})}
`;

const Text2=styled.div`
  padding-left: 20px;
  font-size: 35px;
  width: 80%;
  ${mobile({fontSize:'18px',width:'90%',paddingLeft:'0',margin:'auto'})}
  height: fit-content;
  color: rgba(255,255,255,0.8);
`;

const Light=styled.div`
  position: absolute;
  top: -30px;
  width: 50%;
  height: 1%;
  ${mobile({height:'0.2%'})}
  background-color: white;
  left:25%;
  box-shadow: white 0px 100px 700px 30px;
`;

const Education=styled.div`
  width: 100%;
  padding: 20px;
  ${mobile({padding:'10px'})}
  display: flex;
  justify-content: space-between;
  align-items: start;
  font-family: Arial, Helvetica, sans-serif;
`;
const Contact=styled.div`
  width: 100%;
  padding: 20px;
  ${mobile({padding:'10px'})}
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Left=styled.div`
  text-align: left;
  width: 60%;
  ${mobile({width:'45%'})}
`;

const Right=styled.div`
  text-align: left;
  width: 40%;
  ${mobile({width:'45%'})}
`;

const Degree=styled.div`
  font-size: 30px;
  ${mobile({fontSize:'25px'})}
`;

const Specialization=styled.div`
  color: rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  gap: 30px;
  ${mobile({fontSize:'15px'})}
`;

const College=styled.div`
  font-size: 25px;
  ${mobile({fontSize:'20px'})}
`;

const Timeline=styled.div`
  color: grey;
  ${mobile({fontSize:'13px'})}
`;

const Marks=styled.div`
  color: rgba(255,255,255,0.8);
`;

const ProfilePic=styled.div`
  position: absolute;
  right: -60px;
  top: -50px;
  width: 250px;
`;
const Menu=styled.a`
    text-decoration: none;
    color: whitesmoke;
    cursor: pointer;
    padding:8px 18px;
    &:hover{
        background-color: rgba(255,255,255,0.10);
    }
    border-radius: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
`;

export default function Info() {
  return (
    <>
    <Container>
      {/* intro */}
      <AboutMe>
        <Light/>
        <Heading>
          <Circle/>ABOUT ME
        </Heading>
        <Text1>Hii, I'm Anurag Goel</Text1>
        <Text2>Enthusiastically exploring the world of coding and development, driven by a genuine passion for creating and problem-solving.</Text2>
        <ProfilePic>
          {/* <Profile/> */}
        </ProfilePic>
      </AboutMe>

      {/* experience */}
      <AboutMe>
        <Heading>
            <Circle/>EXPERIENCE
        </Heading>
        <Education>
          <Left>
            <Degree>Ebix Cash Pvt. Ltd.</Degree>
          </Left>  
          <Right>
            <College>Software Developer Intern</College>
            <Timeline>Dec 2022 - Jan 2023</Timeline>
            <Marks style={{marginTop:'10px'}}>I contributed to the auto-extractor software to get pancard number and invoice details.</Marks>
          </Right>
        </Education>  
      </AboutMe>
      
      {/* education */}
      <AboutMe>
        <Heading>
          <Circle/>EDUCATION
        </Heading>
        <Education>
          <Left>
            <Degree>Bachelor of Technology</Degree>
            <Specialization>Computer Science and Engineering</Specialization>
          </Left>
          <Right>
            <College>Indian Institute of Technology, Dharwad</College>
            <Timeline>2021 - Present</Timeline>
            <Marks>CPI/CGPA - 9.35 / 10</Marks>
          </Right>
        </Education>
        <Education>
          <Left>
            <Degree>Intermediate</Degree>
            <Specialization>Physics, Chemistry, Maths</Specialization>
          </Left>
          <Right>
            <College>Dewan Public School, Hapur</College>
            <Timeline>2018 - 2020</Timeline>
            <Marks>Percentage - 94%</Marks>
          </Right>
        </Education>
        <Education>
          <Left>
            <Degree>High School</Degree>
            <Specialization></Specialization>
          </Left>
          <Right>
            <College>Dewan Public School, Hapur</College>
            <Timeline>2018</Timeline>
            <Marks>Percentage - 89%</Marks>
          </Right>
        </Education>

        {/* contact */}
        <AboutMe style={{marginTop:'60px'}}>
          <Heading>
            <Circle/>CONTACT
          </Heading>
          <Contact>
            {/* <Left> */}
              <Specialization style={{height:'40px',marginTop:'10px'}}><img height={'100%'} src="./gmail.png"/> anurag.goel.9303@gmail.com </Specialization>
              <Specialization style={{height:'40px',marginTop:'10px'}}><img height={'100%'} src="./phone.png"/> +91 7906434832 </Specialization>
            {/* </Left> */}
            {/* <Right style={{textAlign:'right'}}> */}
              <Menu href='https://www.linkedin.com/in/anurag-goel-3013372a4/' target='_blank'>
                  LinkedIn        
              </Menu>
              <Menu href='https://drive.google.com/file/d/1vcMMw3hQxQdSBO9UQjC85v55QRIu-uL3/view?usp=sharing' target='_blank'>
                  Resume
              </Menu>
          {/* </Right> */}
          </Contact>
        </AboutMe>
      </AboutMe>
    
    </Container>
    </>
  )
}
