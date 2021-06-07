import { FieldsetData, LegendData } from 'desy-angular';
import { LegendModel } from './legend-model';

export class FieldsetModel implements FieldsetData {
    legend: LegendData;
    id: string;
    classes: string;
    describedBy: string;
    errorId: string;
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

    constructor(){
        this.legend = new LegendModel();
    }
}
