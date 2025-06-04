import { keyframes, styled } from "styled-components";
import { CustomButton } from "../../../ui/CustomButton/CustomButton";

export const Container = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 50px;
    margin-bottom: 200px;
    @media (max-width:920px){
        flex-wrap: wrap;
        margin-bottom: 60px;
    }
`;

const colorChange = keyframes`
    0%{
        background-color: #FCE8B7;
    }
    25%{
        background-color: #FFC1B3;
    }
    50%{
        background-color: #E7E6DE;
    }
    75%{
        background-color: #CCE4F7;
    }
    100%{
        background-color: #D7BAF2;
    }
`;

export const StyledBtn = styled(CustomButton)`
    font-size: 16px;
    animation: ${colorChange} 20s infinite alternate;
    margin: 0 10px;
    padding: 10px;
    transition: 0.3s ease-in-out;
    border: 1px solid transparent;

    &:hover {
        font-size: 19px;
        transition: 0.2s ease-in-out;
        animation-play-state: paused;
    }
`;

export const BtnGo = styled(CustomButton)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 130px;
    font-size: 16px;
    padding: 10px 5px 10px 20px;
    font-weight: 500;
    background-color: #FCE8B7;
    border: none;
    box-shadow: 0 0 5px 0 #927A3F;
    &:hover{
        scale: 1.1;
        background-color:#FCF7EA;
        color: #FCC949;
    }
`;

export const Gif= styled.img`
    right: 0;
    background:none;
    background-color: none;
`;