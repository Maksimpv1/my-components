import { Search } from "../ui/Search/Search";
import * as SC from "./Header.style";
import Avatar from "img/avatar.jpg";

const options = [
  {value: <SC.ImgContainer>
            <SC.AvatarImg src={Avatar} />
          </SC.ImgContainer>,
  key:  1
  },
  {value: <SC.MainTitle>Popov Maksim</SC.MainTitle>,
  key:  2
  },
  {value: <Search />,
  key:  3
  }
]

export const Header = () => {
  return (
    <SC.Container>
      {options.map((item)=>(        
        <SC.Wrapper key={item.key}>
          {item.value}
        </SC.Wrapper>
      ))}
    </SC.Container>
  );
};
