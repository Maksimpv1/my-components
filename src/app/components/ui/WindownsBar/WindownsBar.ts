import { styled } from "styled-components";

export const Container = styled.div<{ $percent: string}>`
    display:flex;
    top: 0;
    left: 0;
    position: fixed;
    width: ${({ $percent}) => `${$percent}%`};
    height: 5px;
    background: #FCC949;
    z-index: 1;
    transition: 0.3s ease-in-out;
`;