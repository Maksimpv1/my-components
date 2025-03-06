import { Content } from "./content/Content"
import { Experience } from "./experience/Experience"
import { Skills } from "./skills/Skills"

export const MainPage = () => {
    return(
        <div>
            <Content />
            <section id="skills">                
                <Skills />
                <Experience />  
            </section>          
        </div>
    )
}