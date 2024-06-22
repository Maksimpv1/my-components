import * as SC from './MainMenu.style'

const options = [
    {key: 1, value: 'MY COMPONENTS'},
    {key: 2, value: 'ABOUT ME'},
    {key: 3, value: 'MY CONTACTS'}
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