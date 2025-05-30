import { BtnNextPage } from '../ui/BtnNextPage/BtnNextPage'
import { Cards } from './Cards/Cards'
import * as SC from './Projects.module'

const projectsData = [
    {
        title:"Creative hub",
        text:"Creative Hub – мощный проект, цель которого стать аналогом hh.ru на азиатском рынке.",
        img:"/img/creative.jpg",
        fullText: <div><li>Разрабатывал календарь событий, адаптировал профиль пользователя и личный кабинет под мобильные устройства.</li> 
        <li>Создавал различные UI-компоненты для улучшения пользовательского опыта.</li></div>,
    },
    {
        title:"Student",
        text:"Student – это личный кабинет для студентов и сотрудников БГУКИ, призванный упростить доступ к учебной информации.",
        img:"/img/student.jpg",
        fullText:<div><h4>Полностью реализовал фронтенд-часть</h4>
        <li>Системы входа и регистрации.</li>
        <li>Личный профиль, расписание, оценки, список преподавателей.</li></div>,
    },
    {
        title:"Notion clone",
        text:"Notion Clone – аналог Notion с интеграцией ИИ и онлайн-коллаборацией."
        ,
        img:"/img/Notion.jpg",
        fullText: <div><h4>Фронтенд:</h4>
        <li>Создание и редактирование документов.</li>
        <li>Система добавления друзей и совместной работы в реальном времени.</li>
        <li>Встроенный ИИ-помощник (например, для генерации текста).</li>
        <li>Отображение курсоров других пользователей при совместном редактировании.</li>
        <h4>Бэкенд:</h4>
        <li>Сервер на Node.js/Express (или другой стек), обрабатывающий запросы.</li>
        <li>Интеграция с ИИ-моделями (например, GPT для перевода/анализа текста).</li>
        <li>Отдача данных в JSON-формате.</li>
        </div>,
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
                <Cards key={index} title={item.title} text={item.text} img={item.img} fullText={item.fullText}/>
                ))}
                <div style={{padding:"20px 0 0 0"}}>
                    <BtnNextPage id='about'>More About ME</BtnNextPage>     
                </div>           
            </SC.Wrapper>
        </SC.Contanier>
    )
}