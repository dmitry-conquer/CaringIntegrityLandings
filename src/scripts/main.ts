declare const cwi: {
  smoothScroll?: boolean;
};

import "../styles/main.scss";
import Header from "./components/header";
import AccordionCollection from "./components/accordion";
import Sliders from "./components/slider";
import InitModals from "./components/modal";
import Aos from "aos";
import { clickOutside } from "./functions";
import Lenis from "lenis";
import ToTopButton from "./components/to-top-button";

document.addEventListener("DOMContentLoaded", () => {
  const header = new Header();
  header.init();

  new AccordionCollection();

  new Sliders();
  new ToTopButton();
  InitModals();
  clickOutside();

  Aos.init({
    once: true,
    duration: 600,
  });

  if (cwi?.smoothScroll) {
    new Lenis({
      autoRaf: true,
      anchors: true,
    });
  }
});
