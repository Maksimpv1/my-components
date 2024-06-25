import { Slide } from "./Slide/Slide"
import rabbit from 'img/rabbit.jpg'

const slides = [
    { key: 1, content: rabbit}
]

export const MainSlider = () => {
    return(
        <div>
            {slides.map((item)=>(
                <Slide key={item.key} content={item.content}/>
            ))}
        </div>
    )
}