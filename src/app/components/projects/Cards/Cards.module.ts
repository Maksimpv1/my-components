import { styled } from "styled-components";
import { CustomButton } from "../../ui/CustomButton/CustomButton";
import { media } from "../../indexStyles";

export const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #F0F0F0;
    padding: 10px;
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
    @media (max-width: 1250px){
        &:hover{            
            transform: scale(1.02);
        }
    }
    @media (max-width: 920px){
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;        
        width: 80%;
    }
`;
export const ImgBox = styled.div`
    width: 350px;
    padding: 10px;
    min-width: 350px;
    ${media.mobile}{
        min-width: 250px;
    }
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    max-width: 550px;

`;

export const Title = styled.h2`
margin: 0;
padding: 0;
${media.mobile}{
    font-size: 18px;
}

`;
export const Text = styled.p`

margin: 0;
padding: 0;
${media.mobile}{
    font-size: 14px;
}

`;
export const Img = styled.img`
    width: 100%;
    border-radius: 15px;
`;

export const Button = styled(CustomButton)`
    width: 90px;
    padding: 0px;
    font-size: 16px;
    background-color: #F9F9F9;
    box-shadow: 0 0 10px 0 #ACACAC;
    border-radius: 15px;
    margin-top: 20px;
`;


export const ModalBox = styled.div`
    background: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin:0px;
    *{        
        background: none;
    }
`;

export const ModalImg = styled.div`
    display: flex;
    width: 550px;
    margin: 0 auto;
    ${media.tablet}{
        width: 380px;
    }
    ${media.mobile}{
        max-width: 280px;
    }
`;

export const ModalTitle = styled.div`
    display: flex;
    margin-left: 30px;
    margin: 10px auto;
`;

export const ModalInfo = styled.div`
    display: flex;
    margin-left: 30px;
    margin: 10px;
    gap: 10px;
    margin-top: 20px;
    ${media.mobile} {
        max-height: 250px;
        overflow-y: auto; 
        &::-webkit-scrollbar {
            width: 8px; 
        }
        &::-webkit-scrollbar-track {
            background: transparent; 
            border-radius: 10px;
            margin: 5px; 
        }
        &::-webkit-scrollbar-thumb {
            background: #888; 
            border-radius: 10px;
            border: 2px solid transparent; 
            background-clip: content-box; 
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #555; 
        }
    }
`;
export const ModalStack = styled.div`
    display: flex;
    max-width: 250px;
    width: 100%;
    margin-left: auto;
    box-shadow: 0 0 5px 1px grey;
    border-radius: 15px;
    padding: 5px;
    justify-content: center;
        ${media.mobile}{        
        box-shadow: 0 0 2px 1px grey;
        margin: 5px;
        justify-content: center;
        flex-direction: column; 
        min-height: fit-content;
    }
`;