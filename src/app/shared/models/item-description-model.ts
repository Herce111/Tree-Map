import { DescriptionData, ItemDescriptionData } from 'desy-angular';

export class ItemDescriptionModel implements ItemDescriptionData {
    term: DescriptionData;
    definition: DescriptionData;
    classes: string;
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

    constructor() {
        this.term = new DescriptionModel();
        this.definition = new DescriptionModel();
    }
}

export class DescriptionModel implements DescriptionData {
    text: string;
    html: string;
    classes: string;
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
