import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-fieldset',
  templateUrl: './demo-fieldset.component.html'
})
export class DemoFieldsetComponent {

  nameComponent = 'fieldSet';

  describedBy: string;
  errorId: string;
  // legend
  legendtext = 'What is your phone number?';
  legendhtml: string;
  legendclasses: string;
  legendisPageHeading: boolean;

  classes = 'p-base bg-warning-light';
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


  // caller
  phone1: string;
  phone2: string;
  phone3: string;

  constructor() { }

}
