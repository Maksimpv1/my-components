import { styled } from "styled-components";
import { media } from "../indexStyles";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1170px;
    flex: 1;
    margin: 0 auto;
    padding: 20px 0;
    gap: 30px;
    align-items: center;
    ${media.tablet}{
        max-width: 550px;
    }`;

export const ExpName = styled.h3`
    ${media.mobile}{
        font-size: 16px;
        margin: 0;
    }
`;
export const ExpText = styled.p`
    ${media.mobile}{
        font-size: 14px;
    }

`;
export const ExperiensBox = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border-left: 3px solid #FCC949;
    padding-left: 10px;
    max-width: 800px;
    width: 100%;
`;
export const BtnBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    ${media.mobile} {
        margin-top: 20px;
    }
`;