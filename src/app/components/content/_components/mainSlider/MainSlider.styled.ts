import { styled } from "styled-components";



export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 40px;
  overflow: hidden;
  &::-webkit-scrollbar {
    width: 0;
  }
`;