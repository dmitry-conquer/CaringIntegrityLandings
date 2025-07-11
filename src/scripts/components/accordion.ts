const rootSelector = "[data-js-accordion]";

class Accordion {
  private readonly selectors: Record<string, string> = {
    root: rootSelector,
    trigger: "[data-js-accordion-trigger]",
  };
  private readonly states: Record<string, string> = {
    isActive: "is-active",
  };
  private rootElement: HTMLElement | null;
  private accordionTriggers: Element[] = [];
  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    if (this.rootElement) {
      this.accordionTriggers = [...this.rootElement.querySelectorAll(this.selectors.trigger)];
    }
    this.init();
  }
  private init() {
    if (this.accordionTriggers.length <= 0) {
      return;
    }
    this.bindEvents();
  }
  private bindEvents() {
    this.accordionTriggers.forEach(el => {
      el?.addEventListener("click", () =>
        this.onAccordionTriggerClick(el.nextElementSibling as HTMLElement, el as HTMLElement)
      );
    });
  }
  private onAccordionTriggerClick(content: HTMLElement, trigger: HTMLElement) {
    this.accordionTriggers.forEach(el => {
      if (el !== trigger) {
        const currentContent = el.nextElementSibling as HTMLElement;
        currentContent.style.maxHeight = "";
        el.classList.remove(this.states.isActive);
        el.setAttribute("aria-expanded", "false");
        el.parentElement?.classList.remove(this.states.isActive);
      }
    });
    content.style.maxHeight = content.style.maxHeight === "" ? `${content.scrollHeight}px` : "";
    trigger.classList.toggle(this.states.isActive);
    trigger.parentElement?.classList.toggle(this.states.isActive);
    trigger.setAttribute("aria-expanded", trigger.classList.contains(this.states.isActive) ? "true" : "false");
  }
}

class AccordionCollection {
  constructor() {
    const collection = document.querySelectorAll(rootSelector);
    collection.forEach(el => {
      new Accordion(el as HTMLElement);
    });
  }
}

export default AccordionCollection;
