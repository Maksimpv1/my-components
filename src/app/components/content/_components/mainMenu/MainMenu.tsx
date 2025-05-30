import { BtnNextPage } from '../../../ui/BtnNextPage/BtnNextPage'
import * as SC from './MainMenu.style'
import { useScrollTo } from '../../../../../hooks/scrollTo'

const options = [
    {key: 1, value: 'SKILLS', id: "skills"},
    {key: 2, value: 'EXPERIENCE', id: "experience"},
    {key: 4, value: 'PROJECTS', id: "projects"},
    {key: 3, value: 'ABOUT ME', id: "about"},
    {key: 5, value: 'CONTACTS', id: "header"}
]

export const MainMenu = () => {
    const scrollTo = useScrollTo();

    return(
        <SC.Container>
            <SC.BtnContainer>
                {options.map((item,index)=>(
                    <SC.StyledBtn key={index} func={()=>scrollTo(item.id)}>
                        {item.value}
                    </SC.StyledBtn>
                ))}
            </SC.BtnContainer>            
            <BtnNextPage id='skills'>Let's go <SC.Gif src='/gif/downArrow-unscreen.gif' alt="loading"/></BtnNextPage>
        </SC.Container>
        
    )
}