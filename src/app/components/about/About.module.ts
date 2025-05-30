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
    margin-bottom: 40px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    max-width: 470px;
    width: 100%;
    gap: 15px;
    padding: 15px;
`;
export const Text = styled.p`
    text-align: justify;
    width: 100%;
    white-space: break-spaces;
    padding-left:10px;
    cursor: pointer;
    border-left: 1px solid #FCC949;
`;
export const StyledText = styled.span<{color?:string}>`
    font-size: 16px;
    font-weight: 500;
    color: ${({color})=> color};
`;