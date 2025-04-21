import * as SC from "./Header.style";

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
    key:  2,
   link: 'https://t.me/Popov_Max'
  }
]

export const Header = () => {
  return (
    <SC.Container>
      <SC.Link href="mailto:maksimpv1@gmial.com">maksimpv1@gmail.com</SC.Link>
      <SC.Wrapper>
        {options.map((item)=>(        
          <SC.Link href={item.link} key={item.key}>
            {item.value}
          </SC.Link>
        ))}
      </SC.Wrapper>
    </SC.Container>
  );
};
