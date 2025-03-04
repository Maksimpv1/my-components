import { styled, keyframes } from "styled-components";

const scroll = keyframes`
0% {
  transform: translateX(0);
}
100%{
  transform: translateX(-50%);
}
`

export const Container = styled.div`
  display: flex;
  overflow: hidden; 
  width: 90%;
  margin: 30px auto;
`;

export const SlidesWrapper = styled.div`
display: flex;
animation: ${scroll} 35s linear infinite ; 

`;