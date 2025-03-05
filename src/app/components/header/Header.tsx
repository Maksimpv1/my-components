import * as SC from "./Header.style";

const options = [
   {value: '',
   key:  1
   },
  {value: '',
  key:  2
  }
]

export const Header = () => {
  return (
    <SC.Container>
      <a>email</a>
      <div>
        {options.map((item)=>(        
          <SC.Wrapper key={item.key}>
            {item.value}
          </SC.Wrapper>
        ))}
      </div>
    </SC.Container>
  );
};
