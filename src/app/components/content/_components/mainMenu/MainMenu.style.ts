import { keyframes, styled } from "styled-components";
import { CustomButton } from "../../../ui/CustomButton/CustomButton";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 50px;
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
        font-size: 18px;
        transition: 0.2s ease-in-out;
        animation-play-state: paused;
        border:1px solid black;
    }
`;