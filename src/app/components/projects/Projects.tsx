import { BtnNextPage } from '../ui/BtnNextPage/BtnNextPage'
import { Cards } from './Cards/Cards'
import * as SC from './Projects.module'

const projectsData = [
    {
        title:"Creative hub",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptate molestiae consequatur voluptates adipisci enim!",
        img:"/img/Notion.jpg",
    },
    {
        title:"Student",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptate molestiae consequatur voluptates adipisci enim!",
        img:"/img/Notion.jpg",
    },
    {
        title:"Notion clone",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptate molestiae consequatur voluptates adipisci enim!",
        img:"/img/Notion.jpg",
    }
]

export const Projects = () => {
    return(
        <SC.Contanier>
            <SC.Wrapper>
                <SC.Title>
                    Latest Projects
                </SC.Title>
                {projectsData.map((item,index)=>(                    
                <Cards key={index} title={item.title} text={item.text} img={item.img}/>
                ))}
                <div style={{margin:"20px 0 0 0"}}>
                    <BtnNextPage>More About ME</BtnNextPage>     
                </div>           
            </SC.Wrapper>
        </SC.Contanier>
    )
}