import { Content } from "../content/Content";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { MainPage } from "../MainPage";
import * as SC from "./HomePage.style";

export const HomePage = () => {
  return (
    <SC.Container>
      <Header />
      <MainPage />
      <Footer />
    </SC.Container>
  );
};
