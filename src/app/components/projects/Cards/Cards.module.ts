import { styled } from "styled-components";
import { CustomButton } from "../../ui/CustomButton/CustomButton";

export const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #F0F0F0;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 0 5px 0 #CACACA;
    transition: 0.3s ease-in-out;
    margin: 10px;
    &:hover{
        transform: scale(1.05);
        transition: 0.3s ease-in-out;
        box-shadow: 0 0 20px 0 #CACACA;
    }
    *{        
        background-color: #F0F0F0;
    }
`;
export const ImgBox = styled.div`
    padding: 10px;
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    max-width: 550px;

`;

export const Title = styled.h2`

`;
export const Text = styled.p`

`;
export const Img = styled.img`
    width: 350px;
    border-radius: 15px;
`;

export const Button = styled(CustomButton)`
    width: 90px;
    padding: 0px;
    font-size: 16px;
    background-color: #F9F9F9;
    box-shadow: 0 0 10px 0 #ACACAC;
    border-radius: 15px;
`;