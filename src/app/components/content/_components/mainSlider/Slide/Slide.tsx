import * as SC from './Slide.style'

interface ISlide {
    content: string
    text:string,
    title:string,
}

export const Slide: React.FC <ISlide> = ({ content,title,text }) => {
    return(
        <SC.Container $img={content} >
            <SC.Content>
                <SC.Title>
                    {title}
                </SC.Title>
                <SC.Discription>
                    {text}
                </SC.Discription>
            </SC.Content>
        </SC.Container>
    )
}