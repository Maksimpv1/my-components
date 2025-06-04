import { BtnNextPage } from "../ui/BtnNextPage/BtnNextPage"
import { Container, MainTitel } from "../ui/StandartStyled"
import * as SC from "./Experience.module"

export const Experience = () => { 
    return(
        <Container>
            <SC.Wrapper>
                <MainTitel>
                    Experience
                </MainTitel>              
                <SC.ExperiensBox>
                    <SC.ExpName>
                        Nexlify — Frontend разработчик (React.js) <br/>
                        11.2024 - 01.2025
                    </SC.ExpName>
                    <SC.ExpText>
                     - Работа на реальном проекте Next js;<br/>
                    - Работа со стеком: React, Typescript, Next.js, Redux Toolkit, styled-components.<br/>
                    -  Сотрудничал с командой UX/UI для разработки улучшений, ориентированных на пользователя.
                    </SC.ExpText>
                </SC.ExperiensBox>
                <SC.ExperiensBox>
                    <SC.ExpName>
                        Antipoff Group — Frontend разработчик (React.js) <br/>
                        03.2024 - 10.2024
                    </SC.ExpName>
                    <SC.ExpText>                    
                        - Работа на реальном проекте Next js;<br/>
                        - Работа со стеком: Vite, React, Typescript, Next.js, Redux Toolkit, React-i18next, React Big Calendar, date-fns, MUI.<br/>
                        - Сотрудничал с UX / UI и серверными командами для согласования концепций дизайна с технической реализацией.
                    </SC.ExpText>
                </SC.ExperiensBox>
                <SC.ExperiensBox>
                    <SC.ExpName>
                    Belarusian State University of Culture and Art — Software engineer.<br/>
                      09.2021 - Present
                    </SC.ExpName>
                    <SC.ExpText>
                     - Руководил созданием проекта от этапа проектирования до развертывания;<br/>
                     - Сотрудничал в команде, используя Git для контроля версий и оптимизации рабочих процессов разработки;<br/>
                     - Практический опыт в составлении различных видов технической документации.<br/>
                     - Разработал, настроил и поддерживал веб-сайт организации, улучшив функциональность и удобство для пользователей.<br/>
                     - Работа со стеком: React, Typescript, Next.js, Redux Toolkit, styled-components.
                    </SC.ExpText>
                </SC.ExperiensBox>  
                <SC.BtnBox>
                    <BtnNextPage id="projects">Jump to Projects</BtnNextPage>
                </SC.BtnBox>
            </SC.Wrapper>
        </Container>
    )
}