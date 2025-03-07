import { FC } from "react"
import { CustomButton } from "../../ui/CustomButton/CustomButton"
import * as SC from "./Cards.module"

interface ICards {
    title:string,
    text:string,
    img:string,
}

export const Cards: FC<ICards> = ({title, text, img}) => {
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
                <SC.Button>More</SC.Button>
            </SC.InfoBox>
        </SC.Container>
        </>
    )
}