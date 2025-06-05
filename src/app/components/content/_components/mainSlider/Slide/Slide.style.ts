import { styled } from "styled-components";


export const Container = styled.div<{ $img?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    width: 200px;
    height: 300px;
    background-image: url(${({ $img }) => $img});
    background-size: 180px auto; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-color: #FFFFFF;
    border-radius: 12px;
    margin: 20px;
    transition: 0.2s ease-in-out;    
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        transition: 0.2s ease-in-out;
        box-shadow: 0 0 5px 2px #4B4636;
    }
    @media (max-width:920px){
        height: 100%;
        width: 100px;        
        background-size: 90px auto; 
        margin: 0 15px;
            &:hover{
        transform: scale(1.01);
    }
    }
`;


export const Content = styled.div`
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 5px 5px 10px 5px;
    width: inherit;
    background-color: rgba(128,128,128, 0.7);
    box-sizing: border-box;    
    @media (max-width:920px){    
    height: 40%;
    }
`;
export const Title = styled.h3`
    font-size: 16px;
    background: none;
    margin: 0;
    color: #FFFFFF;
    @media (max-width:920px){    
    font-size: 13px;
    }
`;
export const Discription = styled.p`
    font-size: 14px;
    background: none;
    margin: 0;
    color: #FFFFFF;
    @media (max-width:920px){    
    font-size: 12px;
    }
`;