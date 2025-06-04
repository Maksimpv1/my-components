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
  @media (max-width:920px){
    width: 90%;
    height: 165px;
    padding: 5px;
  }
`;

export const SlidesWrapper = styled.div`
display: flex;
animation: ${scroll} 35s linear infinite ; 
&:hover{
  animation-play-state: paused;
}
`;