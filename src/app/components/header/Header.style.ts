import { css, keyframes, styled } from "styled-components";
import { media } from "../indexStyles";

const blinker = keyframes`
  0% { color: #FCC949; }
  50% { color: transparent; }
  100% { color: #FCC949; }
`
export const Container = styled.div`  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  *{
    color: #4B4636;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  ${media.mobile}{
    gap: 10px;
  }  

`;

export const Link = styled.a<{$blink?:boolean}>`
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;  

  ${({ $blink }) =>
    $blink &&
    css`
      animation: ${blinker} 1s ease-in-out 2;
    `}

  &:hover{
    color: #FCC949;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px; 
    width: 0; 
    height: 1px; 
    background-color: #FCC949; 
    transition: width 0.3s ease-in-out; 
  }

  &:hover::after {
    width: 100%; 
  }
    ${media.mobile}{
    font-size:14px;
  }  
  
`;

