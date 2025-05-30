import { Slide } from "./Slide/Slide"
import * as SC from "./MainSlider.styled"

const slides = [
    { key: 1, content: '/img/html.png', title: 'HTML Master', text: 'Builds web skeletons!'},
    { key: 2, content: '/img/css.png', title: 'CSS Magician', text: 'Paints pixels pretty!'},
    { key: 3, content: '/img/JavaScript.png', title: 'JS Ninja', text: 'Brings pages alive!'},
    { key: 4, content: '/img/NextJS.jpg', title: 'NextJS Turbo', text: 'Speed is my game!'},
    { key: 5, content: '/img/React.png', title: 'React Rebel', text: 'Components rule everything!'},
    { key: 6 , content: '/img/Git.png', title: 'Git Genius', text: 'Commits save lives!'},
    { key: 7 , content: '/img/FireBase.png', title: 'Firebase Blaze', text: 'Burns bright, never out!'}
]

export const MainSlider = () => {
    const duplicatedSlides = [...slides, ...slides];
    return(
        <SC.Container>
            <SC.SlidesWrapper>
            {duplicatedSlides.map((item,index)=>(
                <Slide key={index} content={item.content} text={item.text} title={item.title}/>
            ))}
            </SC.SlidesWrapper>
        </SC.Container>
    )
}