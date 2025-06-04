import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 180px 0 0 0;
    @media (max-width:920px){
      padding: 50px 0 0 0;
    }
`;

export const MainTitle = styled.h1`
    font-size: 38px;
    max-width: 800px;
    margin-top: 2em;
    font-weight: 500;
    text-align: center;
    margin: 30px 0 0 0;
`;

export const TextDiscriptiom = styled.p`
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    max-width: 800px;
`;
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 20%;
  box-shadow: 0 0 5px 0 black;
  overflow: hidden;
`;
export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainName = styled.h2`
  font-size: 26px;
  color: black;
  font-style: italic;
  text-align: center;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;
