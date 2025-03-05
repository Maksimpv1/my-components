import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Wrapper = styled.div`
    display: flex;
    max-width: 1170px;
    width: 100%; 
    margin: 20px auto;
    justify-content: center;
`;
export const SkillCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    flex: 1;
    margin: 40px auto;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0px 0px 2px 2px black;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover{
        scale: 1.05;
        transition: 0.3s ease-in-out;
        box-shadow: 0px 0px 14px 5px #4B4636;
    }
`;
export const SkillInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    margin: 30px 0;
`;

export const Text = styled.li`
    font-size: 20px;
`;
