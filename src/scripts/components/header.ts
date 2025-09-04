export class Header {
  private readonly selectors: Record<string, string> = {
    root: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    triggerButton: "[data-js-header-trigger-button]",
    menuItems: ".menu-item-has-children",
  };

  private readonly states: Record<string, string> = {
    isActive: "is-active",
    isLock: "is-lock",
  };

  private itemHasSubmenuElements: HTMLElement[] = [];

  private rootElement: HTMLElement | null;
  private overlayElement: HTMLElement | null;
  private triggerButtonElement: HTMLElement | null;
  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement?.querySelector(this.selectors.overlay) || null;
    this.triggerButtonElement = this.rootElement?.querySelector(this.selectors.triggerButton) || null;
    this.itemHasSubmenuElements = [
      ...(this.rootElement?.querySelectorAll(this.selectors.menuItems) || []),
    ] as HTMLElement[];
  }

  public init(): void {
    this.bindEvents();
  }

  private onTriggerButtonClick = (): void => {
    this.triggerButtonElement?.classList.toggle(this.states.isActive);
    this.overlayElement?.classList.toggle(this.states.isActive);
    document.documentElement.classList.toggle(this.states.isLock);
  };

  private toggleSubmenu(currentIndex: number): void {
    this.itemHasSubmenuElements.forEach((menuItem, index) => {
      const subMenu = menuItem.querySelector("ul") as HTMLElement;
      if (!subMenu) return;

      if (currentIndex === index) {
        menuItem?.classList.toggle("is-active");
      } else {
        menuItem.classList.remove("is-active");
      }
    });
  }

  get isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia?.("(pointer: coarse)")?.matches ||
      window.matchMedia?.("(hover: none)")?.matches
    );
  }

  private handleInteraction(index: number, e: MouseEvent) {
    const menuItem = this.itemHasSubmenuElements[index];
    const isActive = menuItem.classList.contains("is-active");

    if (!isActive) {
      e.preventDefault();
      this.toggleSubmenu(index);
    }
  }

  private bindEvents(): void {
    this.triggerButtonElement?.addEventListener("click", this.onTriggerButtonClick);
    this.itemHasSubmenuElements.forEach((item, index) => {
      item.addEventListener("click", (event: MouseEvent) => {
        if (this.isTouchDevice) {
          this.handleInteraction(index, event);
        }
      });
    });
  }
}

export default Header;
