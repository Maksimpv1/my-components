import { Slide } from "./Slide/Slide"
import rabbit from 'img/rabbit.jpg'
import * as SC from "./MainSlider.styled"

const slides = [
    { key: 1, content: rabbit},
    { key: 2, content: rabbit},
    { key: 3, content: rabbit},
    { key: 4, content: rabbit},
    { key: 5, content: rabbit},
    { key: 6 , content: rabbit}
]

export const MainSlider = () => {
    return(
        <SC.Container>
            {slides.map((item)=>(
                <Slide key={item.key} content={item.content}/>
            ))}
        </SC.Container>
    )
}