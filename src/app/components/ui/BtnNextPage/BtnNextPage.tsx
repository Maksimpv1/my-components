import * as SC from './BtnNextPage.module'

export const BtnNextPage = ({func,children, id} : {func?: ()=> void, children?: React.ReactNode, id?: string}) => {
    const scrollToblock = (ID?:string) => {
        if(ID){
            const element = document.getElementById(ID)
            if(element){
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
    }
    return(
        <SC.BtnGo func={func ? func : () => scrollToblock(id)}>{children}</SC.BtnGo>
    )
}