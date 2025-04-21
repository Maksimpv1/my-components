import { BtnNextPage } from "../ui/BtnNextPage/BtnNextPage"
import * as SC from "./About.module"

export const About = () => {
    return(
        <SC.Container>
            <SC.Wrapper>
                <p>Учеба</p>
                <p>Обо мне</p>
                <BtnNextPage id='about'>Contact</BtnNextPage>   
            </SC.Wrapper>
        </SC.Container>
    )
}