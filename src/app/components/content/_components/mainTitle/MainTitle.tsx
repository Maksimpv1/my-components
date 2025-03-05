import * as SC from "./MainTitle.style"

export const MainTitle = () => {
    return(
        <SC.Container>
            <SC.ImgContainer>
             <SC.AvatarImg src={"/img/avatar.jpg"} />
           </SC.ImgContainer>
           <SC.MainName>Popov Maksim</SC.MainName>
            <SC.MainTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sequi!
            </SC.MainTitle>
            <SC.TextDiscriptiom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias necessitatibus quis sit minima possimus consequuntur sapiente fugiat. Consequuntur, odit fugiat?
            </SC.TextDiscriptiom>
        </SC.Container>
    )
}