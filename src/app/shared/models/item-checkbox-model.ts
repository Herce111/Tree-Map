import { TemplateRef } from '@angular/core';
import { HintData, LabelData, ItemCheckboxData } from 'desy-angular';
import { HintComponent } from 'desy-angular';
import { LabelModel } from './label-model';
import { HintModel } from './hint-model';

export class ItemCheckboxModel implements ItemCheckboxData {
  id: string;
  disabled: boolean;
  text: string;
  html: string;
  name: string;
  value: any;
  checked: boolean;
  conditional: boolean;
  conditionalHtml: TemplateRef<any>;
  isIndeterminate: boolean;
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
