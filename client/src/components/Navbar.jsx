import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { mobile } from '../responsive';
import CloseIcon from '@mui/icons-material/Close';
const Nav=styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    font-family:Arial, Helvetica, sans-serif;
    align-items: start;
    margin-top: 20px;
    box-sizing: border-box;
    background-color:transparent;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
`;

const Left=styled.div`
    position: absolute;
    left: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: whitesmoke;
`;

const LeftLight=styled.div`
    height: 15px;
    width:1.5px;
    background-color: orange;
    opacity: 0.8;
    border-radius: 10px;
    box-shadow: orange 25px 0px 50px 12px;
    border: none;
`;
const Text=styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const TextInner=styled.div`
    ${mobile({display:'none'})}

`;
const MyName=styled.div`
`;

const Position=styled.div`
    color: rgba(255,255,255,0.5);
    letter-spacing: 1px;
    font-size: 14px;
`;


const Container=styled.div`
    display: flex;
    width: fit-content;
    align-items: start;
    justify-content: center;
    gap: 10px;
    color: whitesmoke;
    border: 1px solid rgba(234, 207, 207, 0.1);
    background-color: rgba(255,255,255,0.02);
    padding: 0px 30px;
    border-radius: 30px;
    height: 45px;
    box-shadow: black 0px 0px 40px 2px;
`;

const Item=styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;
`;

const Light=styled.div`
    width: 20px;
    position: absolute;
    top: -3px;
    border-radius: 10px;
    height:2px;
    box-shadow: white 0px 15px 50px 6px;
    background-color: ${props =>(props.active==props.value ? `white` : `transparent`)};
    box-shadow: ${props =>(props.active==props.value ? `white 0px 15px 50px 6px` : `none`)};
    transition:all 0.5s ease;
`;

const Name=styled.div`
    margin-top: 5px;
    background-color: ${props =>(props.active==props.value ? `rgba(255,255,255,0.05)` : `transparent`)};
    padding:8px 18px;
    border-radius:18px;
    cursor: pointer;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 14px;
`;
const Right1=styled.div`
    position: absolute;
    right: 20px;
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
    ${mobile({display:'none'})}
`;
const Right2=styled.div`
    position: absolute;
    right: 20px;
    color: white;
    display: none;
    ${mobile({display:'flex'})}
    flex-direction: column;
    gap: 30px;
    align-items: end;
    
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

const Button=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: rgba(255,255,255,0.7);
    background-color: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Options=styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,0.8);
    padding: 10px;
    border-radius: 20px;
`;

export default function Navbar() {

    const location=useLocation();
    // const [active,setActive]=useState("/");
    const navigate=useNavigate();
    const [click,setClick]=useState(false)

  return (
    <Nav>
        <Left>
            <LeftLight/>
            <Text>
                <MyName style={{fontFamily:'fantasy',fontSize:'30px'}}>AG</MyName>
                <TextInner>
                    <MyName>Anurag Goel</MyName>
                    <Position>Student at IIT Dharwad</Position>
                </TextInner>
            </Text>
        </Left>
        <Container>
            <Item>
                <Light value="/" active={location.pathname}></Light>
                <Name value="/" active={location.pathname} onClick={()=>{
                    navigate('/')
                }}>Work</Name>
            </Item>
            <Item>
                <Light value="/about" active={location.pathname}></Light>
                <Name value="/about" active={location.pathname} onClick={()=>{
                    navigate('/about')
                }}>About</Name>
            </Item>
        </Container>
        <Right1>
            <Menu href='https://www.linkedin.com/in/anurag-goel-3013372a4/' target='_blank'>
                LinkedIn        
            </Menu>
            <Menu href='https://drive.google.com/file/d/1TmW7d2b-AygMWSJjGY5hSzALTc3PZO6N/view' target='_blank'>
                Resume
            </Menu>
        </Right1>
        <Right2>
            <Button onClick={()=>{setClick(!click)}}>{click?<CloseIcon/>:<AlternateEmailIcon/>}</Button>
            {click && <Options>
                <Menu href='https://www.linkedin.com/in/anurag-goel-3013372a4/' target='_blank'>
                    LinkedIn        
                </Menu>
                <Menu href='https://drive.google.com/file/d/1vcMMw3hQxQdSBO9UQjC85v55QRIu-uL3/view?usp=sharing' target='_blank'>
                    Resume
                </Menu>
            </Options>}
        </Right2>
    </Nav>
  )
}
