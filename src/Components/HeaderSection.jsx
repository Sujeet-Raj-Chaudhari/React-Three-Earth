import React from 'react'
import styled from 'styled-components'


const HeaderSectionContainer = styled.div`
position: absolute;
width:100%;
height: 72%;
top: 0;
left: 0;
background-color: #1756dd32;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 13%;
z-index: 99;
`;

const Logo = styled.h4 `
margin: 0;
color: #fff;
font-weight: 800;
font-size: 80px;
text-align:center;
`;

const Slogan = styled.h4 `
margin: 0;
color: #fff;
font-weight: 700;
font-size: 30px;
margin-top: 10px;
`;

const Paragraph= styled.p `
margin:0;
margin:top: 3rem;
color: #fff;
font-size: 14px;
line-height: 1.5;
font-weight: 500;
max-width: 30%;
text-align: center;
`


const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }
`;

export function HeaderSection(){
    return(
        <HeaderSectionContainer>
            <Logo>Global Warming</Logo>
            <Slogan>Keep it cool for safe living</Slogan>
            <Paragraph> You can help us cool off th world and have it go back to it's best state ever
                by donating to help fix our only World and beloved EARTH!!
            </Paragraph>
            <DonateButton>Donate!!</DonateButton>
        </HeaderSectionContainer>
    );
}