import {AccordionHeaderData} from 'desy-angular';

export class AccordionHeaderModel implements AccordionHeaderData{
  text: string;
  html: string;
  classes: string;

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
}
