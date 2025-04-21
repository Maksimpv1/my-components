import { CustomButton } from "../CustomButton/CustomButton";
import styled from 'styled-components'

export const BtnGo = styled(CustomButton)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 140px;
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