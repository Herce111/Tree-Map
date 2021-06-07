import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-hint',
  templateUrl: './demo-hint.component.html'
})
export class DemoHintComponent {

  nameComponent = 'hint';

  id: string;
  text: string;
  html = 'It’s on your DNI, <strong class=\" font-bold \">the last letter</strong>.\nFor example, ‘A’.\n';
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

  constructor() { }

}
