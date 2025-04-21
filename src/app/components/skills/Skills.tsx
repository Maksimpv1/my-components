import React from 'react'
import { MainSlider } from '../content/_components/mainSlider/MainSlider'
import * as SC from './Skills.module'
import { Title } from '../ui/StandartStyled'
import { SkillsData } from './SkillsData'

export const Skills = () => {
    return(
        <SC.Container>
            <SC.Wrapper>
                {SkillsData.map((card,index)=>(
                    <SC.SkillCard key={index}>
                    <Title>{card.title}</Title>
                    <SC.SkillInfo>
                        {card.skills.map((item, itemKey)=>(
                             <SC.Text key={itemKey}>{item}</SC.Text>
                        ))}
                    </SC.SkillInfo>
                    </SC.SkillCard>
                ))}
            </SC.Wrapper>          
        <MainSlider/>
        </SC.Container>
    )
}