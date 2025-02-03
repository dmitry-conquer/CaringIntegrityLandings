export function clickOutside(): void {
  const selectors = [".menu-item-has-children > a"];

  document.addEventListener("click", () => {
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.remove("is-active");
      });
    });
  });
}
