import { styled } from "styled-components";



export const Container = styled.button`
    min-height: 50px;
    border-radius: 2em;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    font-family: "Oswald", sans-serif;
    &:hover{
        background-color: #FCE8B7;
        transition: 0.3s ease-in-out;
    }
    color: black;
`;
