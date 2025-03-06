import { MainMenu } from "./_components/mainMenu/MainMenu";
import { MainTitle } from "./_components/mainTitle/MainTitle";

export const Content = () => {
  return (
    <div style={{height:'100vh'}}>
      <MainTitle/>
      <MainMenu/>
    </div>
  )
};
