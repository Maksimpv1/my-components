import { BtnNextPage } from '../../../ui/BtnNextPage/BtnNextPage'
import * as SC from './MainMenu.style'
import { useOneBlink } from '../../../../../hooks/oneBlink'

const options = [
    {key: 1, value: 'SKILLS', id: "skills"},
    {key: 2, value: 'EXPERIENCE', id: "experience"},
    {key: 4, value: 'PROJECTS', id: "projects"},
    {key: 3, value: 'ABOUT ME', id: "about"},
    {key: 5, value: 'CONTACTS', id: "header"}
]

export const MainMenu = () => {
    const handleBlink = useOneBlink();
    const scrollToblock = (ID:string) => {
        const element = document.getElementById(ID)        
            if(element){
                element.scrollIntoView({ behavior: "smooth" })
            }
            if(ID === 'header'){
                handleBlink()
            }else{
        }
    }
    return(
        <SC.Container>
            <SC.BtnContainer>
                {options.map((item,index)=>(
                    <SC.StyledBtn key={index} func={()=>scrollToblock(item.id)}>
                        {item.value}
                    </SC.StyledBtn>
                ))}
            </SC.BtnContainer>            
            <BtnNextPage id='skills'>Let's go <SC.Gif src='/gif/downArrow-unscreen.gif' alt="loading"/></BtnNextPage>
        </SC.Container>
        
    )
}