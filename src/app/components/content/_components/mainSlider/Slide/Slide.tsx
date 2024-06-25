import * as SC from './Slide.style'

interface ISlide {
    content: string
}

export const Slide: React.FC <ISlide> = ({ content }) => {
    return(
        <SC.Container img={content} >
            <SC.Content>
                <SC.Title>
                    Lorem, ipsum.
                </SC.Title>
                <SC.Discription>
                    Lorem, ipsum dolor.
                </SC.Discription>
            </SC.Content>
        </SC.Container>
    )
}