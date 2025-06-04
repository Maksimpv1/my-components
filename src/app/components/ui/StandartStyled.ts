import styled from "styled-components";
import { media } from "../indexStyles";

export const Container = styled.div`
    height: 100vh;
    @media (max-width:920px){
        height: auto;
        margin: 0 15px;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 24px;
    padding: 0;
`;

export const MainTitel = styled.h2`
    font-size: 28px;
    ${media.mobile}{
        margin-bottom: 30px;
        font-size: 22px;
        margin: 10px;
    }
`;