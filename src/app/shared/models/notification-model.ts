import { NotificationItemsData } from "desy-angular";

export class NotificationItemModel implements NotificationItemsData{
    id: string;
    href: string;
    text: string;
    html: string;

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
