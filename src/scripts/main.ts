import "../styles/main.scss";
import Header from "./components/header";
import Accordion from "./components/accordion";
import initSliders from "./components/slider";
import InitModals from "./components/modal";
import Aos from "aos";
import { clickOutside } from "./functions";

document.addEventListener("DOMContentLoaded", () => {
  const header = new Header();
  header.init();

  const accordion = new Accordion();
  accordion.init();

  initSliders();
  InitModals();
  clickOutside();

  Aos.init({
    once: true,
    duration: 600,
  });
});
