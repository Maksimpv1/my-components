import { Skills } from "../skills/Skills";
import { MainMenu } from "./_components/mainMenu/MainMenu";
import { MainSlider } from "./_components/mainSlider/MainSlider";
import { MainTitle } from "./_components/mainTitle/MainTitle";

export const Content = () => {
  return (
    <div>
      <MainTitle/>
      <MainMenu/>
      <Skills/>
    </div>
  )
};
