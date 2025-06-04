import { styled } from "styled-components";

export const Contanier = styled.div`
    height: 100vh;    
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1170px;
    flex:1;
    padding: 10px 0;
    @media (max-width:1250px){
        max-width: 900px;
    }
    @media (max-width:920px){
        max-width: 700px;
        
    }
`;

export const Title = styled.h2`
    font-size: 28px;
`;

export const Name = styled.h4`
    padding: 0;
    margin: 5px;
`;