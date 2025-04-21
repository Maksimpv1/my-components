import { styled } from "styled-components";

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

`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;  
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
  
`;

