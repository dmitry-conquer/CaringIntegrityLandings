import "../styles/main.scss";
import Header from "./components/header";

document.addEventListener("DOMContentLoaded", () => {
  const header = new Header();
  header.init();
});
