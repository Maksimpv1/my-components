import { styled } from "styled-components";

export const Container = styled.div`
    height: 100vh;
`;

export const Wrapper = styled.div`
    display: flex;
    margin: 0px auto;
    max-width: 1170px;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    padding: 25px;
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    max-width: 470px;
    width: 100%;
    gap: 15px; 
`;
export const Text = styled.p`
    white-space: break-spaces;
`;
export const StyledText = styled.span<{color?:string}>`
    font-size: 16px;
    font-weight: 500;
    color: ${({color})=> color};
`;