import { useEffect } from "react"
import * as SC from "./ModalWindow.module"
import { Close } from "../Close";

export const ModalWindow = ({open, setOpen, children}: {open:boolean, setOpen: (value:boolean)=> void, children?: React.ReactNode}) => {

    useEffect(()=>{
        if(open){
            document.body.style.overflow = "hidden"
        }else{            
            document.body.style.overflow = ""
        }

        return() =>{ 
            document.body.style.overflow = ""            
        }
    },[open])


    const handleShadowClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setOpen(false);
        }
    };
 
    return(
        <SC.Container open={open}>
            <SC.ShadowBox open={open} onClick={handleShadowClick}/>
            <SC.Wrapper> 
                <SC.Close onClick={() => setOpen(false)}><Close/></SC.Close>
                {children}
            </SC.Wrapper>
        </SC.Container>
    )
}