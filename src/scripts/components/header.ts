export class Header {
  private readonly selectors: Record<string, string> = {
    root: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    triggerButton: "[data-js-header-trigger-button]",
    menuItemsHasChildren: ".menu-item-has-children",
  };

  private readonly states: Record<string, string> = {
    isActive: "is-active",
    isLock: "is-lock",
  };

  private rootElement: HTMLElement | null;
  private overlayElement: HTMLElement | null;
  private triggerButtonElement: HTMLElement | null;
  private menuItemsHasChildren: NodeListOf<Element>;
  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement?.querySelector(this.selectors.overlay) || null;
    this.triggerButtonElement = this.rootElement?.querySelector(this.selectors.triggerButton) || null;
    this.menuItemsHasChildren = document.querySelectorAll(this.selectors.menuItemsHasChildren) || [];
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
    this.menuItemsHasChildren.forEach(el => {
      el.addEventListener("click", e => {
        const target = e.target as Element;
        if (target === el.querySelector("a")) {
          e.preventDefault();
        }
        if (target === el.querySelector("a") || target === el){
          el?.classList.toggle("is-active");
        }
      });
    });
  }
}

export default Header;
