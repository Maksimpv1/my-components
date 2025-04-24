import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { MainPage } from "../MainPage";
import { WindownsBar } from "../ui/WindownsBar/WindowsBar";
import * as SC from "./HomePage.style";

export const HomePage = () => {
  return (
    <SC.Container>
      <WindownsBar/>
      <section id="header">
        <Header />
      </section>
      <MainPage />
      <Footer />
    </SC.Container>
  );
};
