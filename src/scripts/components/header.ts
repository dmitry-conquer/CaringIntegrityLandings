export class Header {
  private readonly selectors: Record<string, string> = {
    root: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    triggerButton: "[data-js-header-trigger-button]",
    menuLinks: ".menu-item-has-children > a",
  };

  private readonly states: Record<string, string> = {
    isActive: "is-active",
    isLock: "is-lock",
  };

  private rootElement: HTMLElement | null;
  private overlayElement: HTMLElement | null;
  private triggerButtonElement: HTMLElement | null;
  private menuLinksElements: NodeListOf<Element> | [];
  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement?.querySelector(this.selectors.overlay) || null;
    this.triggerButtonElement = this.rootElement?.querySelector(this.selectors.triggerButton) || null;
    this.menuLinksElements = this.rootElement?.querySelectorAll(this.selectors.menuLinks) || [];
  }

  public init(): void {
    this.bindEvents();
  }

  private onTriggerButtonClick = (): void => {
    this.triggerButtonElement?.classList.toggle(this.states.isActive);
    this.overlayElement?.classList.toggle(this.states.isActive);
    document.documentElement.classList.toggle(this.states.isLock);
  };

  private bindEvents(): void {
    this.triggerButtonElement?.addEventListener("click", this.onTriggerButtonClick);
    this.toggleMenuItems();
  }

  private toggleMenuItems(): void {
    this.menuLinksElements.forEach(link => {
      link.addEventListener("click", e => {
        e.stopPropagation();
        e.preventDefault();
        this.menuLinksElements.forEach(i => {
          if (i !== link) {
            i.classList.remove("is-active");
          }
        });
        link?.classList.toggle("is-active");
      });
    });
  }
}

export default Header;
