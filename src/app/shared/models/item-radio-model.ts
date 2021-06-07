import { HintData, ItemRadioData, LabelData } from 'desy-angular';
import { LabelModel } from './label-model';
import { HintModel } from './hint-model';

export class ItemRadioModel implements ItemRadioData {
    id: string;
    disabled: boolean;
    text: string;
    html: string;
    value: any;
    divider: string;
    checked: boolean;
    conditional: boolean;
    classes: string;
    labelData: LabelData;
    hintData: HintData;
    hintText: string;

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
        this.labelData = new LabelModel();
        this.hintData = new HintModel();
    }

}
