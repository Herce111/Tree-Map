import { MenuVerticalItemsData, MenuVerticalSubData, MenuVerticalSubItemsData } from 'desy-angular';

export class MenuVerticalModel implements MenuVerticalItemsData{
    id: string;
    text: string;
    html: string;
    classes: string;
    href: string;
    routerLink: string;
    routerLinkActiveClasses: string;
    fragment: string;
    target: string;
    expanded: boolean;
    disabled: boolean;
    divider: boolean;
    sub: MenuVerticalSubData;

    role?: string;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    ariaLabelledBy?: string;
    ariaHidden?: string;
    ariaDisabled?: string;
    ariaControls?: string;
    ariaCurrent?: string;
    ariaLive?: string;
    ariaExpanded?: string;
    ariaErrorMessage?: string;
    ariaHasPopup?: string;
    tabindex?: string;

    constructor() {
        this.sub = new MenuVerticalSubModel();
    }
}

export class MenuVerticalSubModel implements MenuVerticalSubData {
    id: string;
    html: string;
    classes: string;
    items: MenuVerticalSubItemsData[];

    role?: string;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    ariaLabelledBy?: string;
    ariaHidden?: string;
    ariaDisabled?: string;
    ariaControls?: string;
    ariaCurrent?: string;
    ariaLive?: string;
    ariaExpanded?: string;
    ariaErrorMessage?: string;
    ariaHasPopup?: string;
    tabindex?: string;
}

export class MenuVerticalSubItemsModel implements MenuVerticalSubItemsData {
    text: string;
    html: string;
    href: string;
    routerLink: string;
    routerLinkActiveClasses: string;
    fragment: string;
    id: string;
    disabled: boolean;
    active: boolean;
    divider: boolean;
    target: string;
}