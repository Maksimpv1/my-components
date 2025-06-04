import { Container } from "../ui/StandartStyled";
import { MainMenu } from "./_components/mainMenu/MainMenu";
import { MainTitle } from "./_components/mainTitle/MainTitle";

export const Content = () => {
  return (
    <Container>
      <MainTitle/>
      <MainMenu/>
    </Container>
  )
};
