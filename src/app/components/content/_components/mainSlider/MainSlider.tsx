import { Slide } from "./Slide/Slide"
import * as SC from "./MainSlider.styled"

const slides = [
    { key: 1, content: '/img/html.png'},
    { key: 2, content: '/img/css.png'},
    { key: 3, content: '/img/JavaScript.png'},
    { key: 4, content: '/img/NextJS.jpg'},
    { key: 5, content: '/img/React.png'},
    { key: 6 , content: '/img/Git.png'},
    { key: 7 , content: '/img/FireBase.png'}
]

export const MainSlider = () => {
    const duplicatedSlides = [...slides, ...slides];
    return(
        <SC.Container>
            <SC.SlidesWrapper>
            {duplicatedSlides.map((item)=>(
                <Slide key={item.key} content={item.content}/>
            ))}
            </SC.SlidesWrapper>
        </SC.Container>
    )
}