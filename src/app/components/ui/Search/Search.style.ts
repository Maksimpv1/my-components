import { styled } from "styled-components";
import { ReactComponent as Logo } from "img/GlassSearch.svg";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 35px;
  border-radius: 15px;
  padding: 5px;
  background-color: #ffffff;
`;

export const SearchIpt = styled.input`
  width: 90%;
  height: 100%;
  background: none;
  border: none;
  font-size: 18px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const Glass = styled(Logo)`
  background-color: #FFFFFF;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  path {
    fill: #757587;
  }
`;
