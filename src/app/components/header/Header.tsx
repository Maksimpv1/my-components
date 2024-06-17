import * as SC from './Header.style'
import Avatar from 'public/img/avatar.jpg'

export const Header = () => {
    return (
        <SC.Container>
            <SC.ImgContainer>
                <SC.AvatarImg src={Avatar}/>                
            </SC.ImgContainer>
        </SC.Container>
    )
}