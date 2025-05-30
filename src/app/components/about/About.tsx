import { useScrollTo } from "../../../hooks/scrollTo";
import { BtnNextPage } from "../ui/BtnNextPage/BtnNextPage"
import * as SC from "./About.module"
interface Itype {
    type: 'name' | 'tech' | 'years';
}

export const About = () => {
    
    const scrollTo = useScrollTo();
    const colors = {
        red:"#FF6B6B",
    }
    return(
        <SC.Container>
            <SC.Wrapper>      
                <SC.Cards>
                    <SC.Card>
                        <h2>Образование</h2>
                        <SC.Text><SC.StyledText color={colors.red}>БГУИР</SC.StyledText> - Инженер по информационным
                         технологиям и управлению в технических системах <SC.StyledText color={colors.red}>2017 - 2021</SC.StyledText></SC.Text>
                        <SC.Text><SC.StyledText color={colors.red}>TeachMeSkills</SC.StyledText> Frontend Developer <SC.StyledText color={colors.red}>
                        2022 - 2023 </SC.StyledText></SC.Text>                        
                    </SC.Card>
                    <SC.Card>
                    <h2>Обо мне</h2>
                    <SC.Text>
                    Frontend-разработку я выбрал в 2020 году на последнем курсе университета, вдохновившись возможностью оживлять идеи через код.
                    В 2023 году я решил развиваться в этом направлении
                    <br/><br/>- Почему я выбрал направление Frontend?
                    Познакомился с Frontend на последнем курсе университета 2020, и в начале 2023 года принял решение что хочу развиваться в этом направлении и стать лучшим ! 
                    <br/><br/>- Я самостоятельный и дисциплинированный, умею работать в команде, уважая чужое мнение, и открыт к конструктивной критике.
                     Мой опыт организационно-управленческой деятельности помогает эффективно планировать задачи и находить компромиссы.
                      Постоянно совершенствуюсь, изучая новые технологии и решая сложные задачи, чтобы создавать современные и удобные интерфейсы.
                    <br/><br/>Моя цель - разрабатывать эффективные и современные Frontend-решения, и развиваться как профессионал.
                    </SC.Text>
                    </SC.Card>
                </SC.Cards> 
                <BtnNextPage id='about' func={() => scrollTo("header")}>Contact</BtnNextPage>   
            </SC.Wrapper>
        </SC.Container>
    )
}