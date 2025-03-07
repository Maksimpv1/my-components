import { Content } from "./content/Content"
import { Experience } from "./experience/Experience"
import { Projects } from "./projects/Projects"
import { Skills } from "./skills/Skills"

export const MainPage = () => {
    return(
        <div>
            <Content />
            <section id="skills">                
                <Skills />
            </section>  
            <section id="experience">                
                <Experience />
            </section> 
            <section id="projects">                
                <Projects />
            </section>    
        </div>
    )
}