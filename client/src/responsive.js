import {css} from "styled-components"

export const mobile=(props)=>{
    return css`
        @media only screen and (max-width:580px){
            ${props}
        }
    `;
}

export const smallscreen=(props)=>{
    return css`
        @media only screen and (max-width:900px){
            ${props}
        }
    `
}

export const tablet=(props)=>{
    return css`
        @media only screen and (max-width:1250px){
            ${props}
        }
    `;
}
