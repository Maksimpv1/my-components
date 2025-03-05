import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const MainTitle = styled.h1`
    font-size: 48px;
    max-width: 800px;
    margin-top: 2em;
    font-weight: 500;
    text-align: center;
`;

export const TextDiscriptiom = styled.p`
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    max-width: 800px;
`;
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 100%;
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
`;
