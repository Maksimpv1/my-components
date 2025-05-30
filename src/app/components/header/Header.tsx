import { useEffect } from "react";
import * as SC from "./Header.style";
import { useAppSelector } from "../../../redux/store/store";
const options = [
   {value: 'Linkedin',
   key:  1,
   link: 'https://www.linkedin.com/in/1-maxim-popov'
   },
  {value: 'Github',
  key:  2,
   link: 'https://github.com/Maksimpv1'
  },
  {value: 'Telegram',
    key:  3,
   link: 'https://t.me/Popov_Max'
  }
]

export const Header = () => {
  const blink = useAppSelector((item) => item.blink )
  return (
    <SC.Container>
      <SC.Link blink={blink} href="mailto:maksimpv1@gmial.com">maksimpv1@gmail.com</SC.Link>
      <SC.Wrapper>
        {options.map((item,index)=>(        
          <SC.Link href={item.link} key={index} blink={blink}>
            {item.value}
          </SC.Link>
        ))}
      </SC.Wrapper>
    </SC.Container>
  );
};
