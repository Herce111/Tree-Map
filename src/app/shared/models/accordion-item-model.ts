import {AccordionItemData} from 'desy-angular';

export class AccordionItemModel implements AccordionItemData{
  headerText: string;
  headerHtml: string;
  text: string;
  html: string;
  id: string;
  open: boolean;
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
  tabindex: string;
}
