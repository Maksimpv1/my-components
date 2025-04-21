import { FC, useState } from "react"
import { CustomButton } from "../../ui/CustomButton/CustomButton"
import * as SC from "./Cards.module"
import { ModalWindow } from "../../ui/ModalWin/ModalWindow"

interface ICards {
    title:string,
    text:string,
    img:string,
}

export const Cards: FC<ICards> = ({title, text, img}) => {
    const [open, setOpen] = useState<boolean>(false);


    return(

        <>
        <SC.Container>
            <SC.ImgBox>
                <SC.Img src={img}/>
            </SC.ImgBox>
            <SC.InfoBox>
                <SC.Title>
                    {title}
                </SC.Title>
                <SC.Text>
                    {text}
                </SC.Text>
                <SC.Button func={() => setOpen(true)}>More</SC.Button>
            </SC.InfoBox>
        </SC.Container>
        <ModalWindow open={open} setOpen={setOpen}>
            <SC.ModalBox>  
                <SC.ModalTitle>              
                    <SC.Title>
                            {title}
                    </SC.Title>
                </SC.ModalTitle>
                <SC.ModalImg>                    
                    <SC.Img src={img}/>
                </SC.ModalImg>
                    <SC.ModalInfo>
                        <SC.Text>
                            {text}
                        </SC.Text>
                        <SC.ModalStack>                            
                            <SC.Text>
                                213
                            </SC.Text>
                        </SC.ModalStack>
                    </SC.ModalInfo>
            </SC.ModalBox>
        </ModalWindow>
        </>
    )
}