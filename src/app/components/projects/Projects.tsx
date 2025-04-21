import { BtnNextPage } from '../ui/BtnNextPage/BtnNextPage'
import { Cards } from './Cards/Cards'
import * as SC from './Projects.module'

const projectsData = [
    {
        title:"Creative hub",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptate molestiae consequatur voluptates adipisci enim!",
        img:"/img/creative.jpg",
    },
    {
        title:"Student",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptate molestiae consequatur voluptates adipisci enim!",
        img:"/img/student.jpg",
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
                <div style={{padding:"20px 0 0 0"}}>
                    <BtnNextPage id='about'>More About ME</BtnNextPage>     
                </div>           
            </SC.Wrapper>
        </SC.Contanier>
    )
}