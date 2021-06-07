import { BreadcrumbsData } from 'desy-angular';

export class ItemBreadcrumbsModel implements BreadcrumbsData{
    text: string;
    html: string;
    routerLink: string;
    
    id: string;
    role: string;
    ariaLabel: string;
    ariaDescribedBy: string;
    ariaLabelledBy: string;
    ariaHidden: string;
    ariaDisabled: string;
    ariaControls: string;
    ariaCurrent: string;
    ariaLive: string;
    ariaExpanded: string;
    ariaErrorMessage: string;
    ariaHasPopup: string;
    tabindex: string;
}
