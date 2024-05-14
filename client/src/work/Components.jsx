import styled from "styled-components";
import { mobile, smallscreen } from '../responsive';

export const Container=styled.div`
    width: 100%;
    padding-bottom: 100px;
    background:rgba(21,26,27,1);
    font-family: Arial, Helvetica, sans-serif;
`;


export const ButtonLine=styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
`;

export const Back=styled.div`
    color: white;
    background-color: rgba(255,255,255,0.1);
    padding: 10px 22px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 2px;
    margin: 40px;
    ${mobile({margin:'20px',padding:'5px 13px',fontSize:'12px'})}
    &:hover{
      background-color: rgba(255,255,255,0.2);
    }
    cursor: pointer;
    box-shadow: rgba(0,0,0,0.4) 0px 0px 30px 1px;
`;

export const Title=styled.div`
    margin-top: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    font-size: 45px;
    ${smallscreen({fontSize:'35px'})}
    ${mobile({fontSize:'20px'})}
    text-shadow: 0 0 4px #fff;
`;

export const Company=styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.8);
  font-size: 18px;
  ${smallscreen({fontSize:'15px'})}
  ${mobile({fontSize:'13px'})}
`;

export const Overview=styled.div`
  width: 60%;
  ${smallscreen({width:'80%',fontSize:'14px'})}
  margin: auto;
  margin-top: 50px;
  color: rgba(255,255,255,0.7);
  line-height: 25px;
`;

export const Left=styled.div``;

export const Right=styled.div``;


export const Links=styled.div`
    width: 60%;
    ${mobile({fontSize:'20px'})}
    ${smallscreen({width:'80%',fontSize:'14px'})}
    margin: auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const GithubLink=styled.a`
    text-decoration: none;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 5px;
    color: white;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    &:hover{
        background-color: rgba(255,255,255,0.1);     
    }
    border: solid 0.5px cyan;
`;