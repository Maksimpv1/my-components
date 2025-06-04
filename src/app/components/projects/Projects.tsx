import { BtnNextPage } from '../ui/BtnNextPage/BtnNextPage'
import { Container, MainTitel } from '../ui/StandartStyled'
import { Cards } from './Cards/Cards'
import * as SC from './Projects.module'

const projectsData = [
    {
        title:"Creative hub",
        text:"Creative Hub – мощный проект, цель которого стать аналогом hh.ru на азиатском рынке.",
        img:"/img/creative.jpg",
        fullText: <div><SC.Name>Фронтенд:</SC.Name>
        <li>Разрабатывал календарь событий, адаптировал профиль пользователя и личный кабинет под мобильные устройства.</li> 
        <li>Создавал различные UI-компоненты для улучшения пользовательского опыта.</li></div>,
        stack:<div><SC.Name>Nextjs</SC.Name>
        <li>Typescript</li>
        <li>MUI</li>
        <li>React-reduxjs, toolkit</li>        
        <li>React-big-calendar</li>        
        <li>Axios</li>        
        <li>Dayjs</li>
        <li>React-i18next</li>
        </div>,
    },
    {
        title:"Student",
        text:"Student – это личный кабинет для студентов и сотрудников БГУКИ, призванный упростить доступ к учебной информации.",
        img:"/img/student.jpg",
        fullText:<div><SC.Name>Фронтенд:</SC.Name>
        <li>Системы входа и регистрации.</li>
        <li>Личный профиль, расписание, оценки, список преподавателей.</li></div>,
        stack:<div><SC.Name>Nextjs</SC.Name>
        <li>Typescript</li>
        <li>styled-components</li>
        <li>axios</li>
        <li>React-redux, toolkit</li>
        <li>firebase (для демо)</li>
        <li>formik</li>
        <li>yup</li>
        </div>,
    },
    {
        title:"Notion clone",
        text:"Notion Clone – аналог Notion с интеграцией ИИ и онлайн-коллаборацией."
        ,
        img:"/img/Notion.jpg",
        fullText: <div><SC.Name>Фронтенд:</SC.Name>
        <li>Создание и редактирование документов.</li>
        <li>Система добавления друзей и совместной работы в реальном времени.</li>
        <li>Встроенный ИИ-помощник ( для генерации текста).</li>
        <li>Отображение курсоров других пользователей при совместном редактировании.</li>
        <SC.Name>Бэкенд:</SC.Name>
        <li>Использован сервис cloudflare, для серверной логики, и деплоя проекта.</li>
        <li>Интеграция с ИИ-моделями ( GPT для перевода/анализа текста).</li>
        <li>Отдача данных в JSON-формате.</li>
        </div>,
        stack:<div><SC.Name>Nextjs</SC.Name>
        <li>liveblocks</li>
        <li>clerk</li>
        <li>radix-ui</li>
        <li>firebase</li>
        <li>frame-motion</li>
        <li>sonner</li>
        <li>vaul</li>
        <li>yjs</li>
        <SC.Name>Cloudflare</SC.Name>
        <li>hono</li>
        <li>openai</li>
        </div>,
    }
]

export const Projects = () => {
    return(
        <Container>
            <SC.Wrapper>
                <MainTitel>
                    Latest Projects
                </MainTitel>
                {projectsData.map((item,index)=>(                    
                <Cards key={index} title={item.title} text={item.text} img={item.img} fullText={item.fullText} stack={item.stack}/>
                ))}
                <div style={{padding:"20px 0 0 0"}}>
                    <BtnNextPage id='about'>More About ME</BtnNextPage>     
                </div>           
            </SC.Wrapper>
        </Container>
    )
}