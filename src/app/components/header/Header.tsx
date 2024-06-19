import { Search } from "../ui/Search/Search";
import * as SC from "./Header.style";
import Avatar from "img/avatar.jpg";

export const Header = () => {
  return (
    <SC.Container>
      <SC.ImgContainer>
        <SC.AvatarImg src={Avatar} />
      </SC.ImgContainer>
      <SC.MainTitle>Popov Maksim</SC.MainTitle>
      <Search />
    </SC.Container>
  );
};
