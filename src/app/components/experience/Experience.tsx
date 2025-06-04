import { BtnNextPage } from "../ui/BtnNextPage/BtnNextPage"
import { Container } from "../ui/StandartStyled"
import * as SC from "./Experience.module"

export const Experience = () => { 
    return(
        <Container>
            <SC.Wrapper>
                <SC.MainTitel>
                    Experience
                </SC.MainTitel>              
                <SC.ExperiensBox>
                    <SC.ExpName>
                        Nexlify — Frontend разработчик (React.js) <br/>
                        11.2024 - 01.2025
                    </SC.ExpName>
                    <SC.ExpText>
                     - Working on a project with the Next js framework;<br/>
                     - Collaborated with UX/UI team to plan and coordinate user-focused experience improvements.
                    </SC.ExpText>
                </SC.ExperiensBox>
                <SC.ExperiensBox>
                    <SC.ExpName>
                        Antipoff Group — Frontend разработчик (React.js) <br/>
                        03.2024 - 10.2024
                    </SC.ExpName>
                    <SC.ExpText>                    
                        - Working on a project with the Next js framework;<br/>
                        - Partnered with UX/UI and backend teams to align design concepts with technical implementation.;<br/>
                        - Working with the stack: Vite, React, Typescript, Next.js, Redux Toolkit, React-i18next, React Big Calendar, date-fns, MUI.<br/>
                    </SC.ExpText>
                </SC.ExperiensBox>
                <SC.ExperiensBox>
                    <SC.ExpName>
                    Belarusian State University of Culture and Art — Software engineer.<br/>
                      09.2021 - Present
                    </SC.ExpName>
                    <SC.ExpText>
                     - "Managed project creation from the design phase through to deployment;"<br/>
                     - "Collaborated in team utilizing Git for version control and streamlined development workflows;"<br/>
                     - "Practical expertise in drafting various types of technical documentation;"<br/>
                     - "Developed, configured, and maintained the organization’s website, enhancing functionality and user experience."
                    </SC.ExpText>
                </SC.ExperiensBox>  
                <SC.BtnBox>
                    <BtnNextPage id="projects">Jump to Projects</BtnNextPage>
                </SC.BtnBox>
            </SC.Wrapper>
        </Container>
    )
}