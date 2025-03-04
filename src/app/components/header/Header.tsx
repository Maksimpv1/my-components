import * as SC from "./Header.style";

const options = [
   {value: <SC.ImgContainer>
             <SC.AvatarImg src={"/img/avatar.jpg"} />
           </SC.ImgContainer>,
   key:  1
   },
  {value: <SC.MainTitle>Popov Maksim</SC.MainTitle>,
  key:  2
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
