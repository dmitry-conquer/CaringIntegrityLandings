export function clickOutside(): void {
  const selectors = [".menu-item-has-children"];

  document.body.addEventListener("click", e => {
    const target = e.target as Element;
    selectors.forEach(selector => {
      if (!target?.closest(selector)) {
        document.querySelectorAll(selector).forEach(el => {
          el?.classList.remove("is-active");
        });
      }
    });
  });
}
