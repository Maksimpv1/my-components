import * as SC from './MainMenu.style'

const options = [
    {key: 1, value: 'SKILLS'},
    {key: 2, value: 'EXPERIENCE'},
    {key: 3, value: 'ABOUT ME'},
    {key: 4, value: 'PROJECTS'},
    {key: 5, value: 'CONTACTS'}
]

export const MainMenu = () => {
    return(
        <SC.Container>
            {options.map((item)=>(
                <SC.StyledBtn key={item.key}>
                    {item.value}
                </SC.StyledBtn>
            ))}
        </SC.Container>
    )
}