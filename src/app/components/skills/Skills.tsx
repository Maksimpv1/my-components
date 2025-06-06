import React from 'react'
import { MainSlider } from '../content/_components/mainSlider/MainSlider'
import * as SC from './Skills.module'
import { Container, MainTitel, Title } from '../ui/StandartStyled'
import { SkillsData } from './SkillsData'

export const Skills = () => {
    return(
        <Container>
            <SC.Wrapper>
                {SkillsData.map((card,index)=>(
                    <SC.SkillCard key={index}>
                    <MainTitel>{card.title}</MainTitel>
                    <SC.SkillInfo>
                        {card.skills.map((item, itemKey)=>(
                             <SC.Text key={itemKey}>{item}</SC.Text>
                        ))}
                    </SC.SkillInfo>
                    </SC.SkillCard>
                ))}
            </SC.Wrapper>          
        <MainSlider/>
        </Container>
    )
}