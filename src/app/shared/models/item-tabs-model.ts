import { TemplateRef } from '@angular/core';
import { TabsItemsData, TabsPanelData } from 'desy-angular';

export class ItemTabsModel implements TabsItemsData{
    id: string;
    text: string;
    html: string;
    disabled: boolean;
    panel: TabsPanelData;
    
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
        this.panel = new TabsModel();
    }
}
export class TabsModel implements TabsPanelData {
    id: string;
    text: string;
    html: TemplateRef<any>;
    classes: string;
    
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