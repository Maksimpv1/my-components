import { keyframes, styled } from "styled-components";

const infinityScroll = keyframes`
    0%{
        transform: translateX(0%);
    }
    100%{
        transform: translateX(calc(-100% - 200px));
    }
`;

export const Container = styled.div<{ img?: string } >`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    width: 200px;
    height: 300px;
    background-image: url(${({img})=> img});
    background-size: cover;
    background-color: #ACACAC;
    border-radius: 12px;
    margin: 0 20px;
    animation: ${infinityScroll} 10s linear infinite;
`;
export const Content = styled.div`
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 5px 5px 10px 5px;
    width: inherit;
    background-color: rgba(128,128,128, 0.7);
    box-sizing: border-box;    
`;
export const Title = styled.h3`
    font-size: 16px;
    background: none;
    margin: 0;
    color: #FFFFFF;
`;
export const Discription = styled.p`
    font-size: 14px;
    background: none;
    margin: 0;
    color: #FFFFFF;
`;