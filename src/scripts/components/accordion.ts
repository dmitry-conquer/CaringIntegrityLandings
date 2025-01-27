class Accordion {
  private readonly selectors: Record<string, string> = {
    root: "[data-js-accordion]",
    trigger: "[data-js-accordion-trigger]",
  };
  private readonly states: Record<string, string> = {
    isActive: "is-active",
  };
  private rootElement: HTMLElement | null;
  private accordionTriggers: Element[] = [];
  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    if (this.rootElement) {
      this.accordionTriggers = [...this.rootElement.querySelectorAll(this.selectors.trigger)];
    }
  }
  public init() {
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
      }
    });
    content.style.maxHeight = content.style.maxHeight === "" ? `${content.scrollHeight}px` : "";
    trigger.classList.toggle(this.states.isActive);
  }
}

export default Accordion;
