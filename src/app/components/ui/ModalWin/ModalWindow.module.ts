import { styled } from "styled-components";
import { media } from "../../indexStyles";

export const Container = styled.div<{ open: boolean }>`   
    display: ${({ open }) => (open ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: none;
    z-index: 1000; 
`;

export const ShadowBox = styled.div<{ open: boolean }>`    
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: ${({ open }) => (open ? "0.3" : "0")};
    transition: opacity 0.3s ease-in-out;
    z-index: 1001; 
`; 

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%; 
    max-width: 1000px;
    max-height: 700px;
    background-color: #FFFFFF; 
    border-radius: 25px;
    padding: 15px;
    z-index: 1002; 
    @media (max-width:1100px){
        max-width: 850px;
    }
    @media (max-width: 920px) {
        width: 80%;        
        max-height: 80%;
    }
`;

export const Close = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    right: 20px;
    position: absolute;
    background: none;
    border: 1px solid black;
    border-radius: 100%;
    transition: 0.3s ease-in-out;
    svg{
            transition: 0.2s ease-in-out;
        }
    &:hover{
        svg{
            transition: 0.2s ease-in-out;
            scale: 1.2;
        }
    }
        ${media.mobile}{  
        width: 25px;
        height: 25px;
        svg{
            width: 25px;    
            height: 25px;
            transition: 0.2s ease-in-out;
            scale: 1.2;
        }
    }
`;
