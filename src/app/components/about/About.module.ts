import { styled } from "styled-components";

interface Itype {
    type: 'name' | 'tech' | 'years';
}

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
export const Text:Itype = styled.p`
    font-size: 16px;
    font-weight: ;
    color: ;
`;