import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
`;

export const Wrapper = styled.div`
  width:300px;
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

export const MainTitle = styled.h2`
  font-size: 26px;
  color: black;
  font-style: italic;
  text-align: center;
  font-weight: 400;
`;
