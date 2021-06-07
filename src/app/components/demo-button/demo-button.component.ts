import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-button',
  templateUrl: './demo-button.component.html'
})
export class DemoButtonComponent {

  nameComponent = 'button';

  text: string;
  html = 'Button with icon' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="self-center ml-2" aria-hidden="true" focusable="false" width="1em" height="1em">'
          + '<path fill="currentColor" stroke="none" d="M14.621 7.928a.643.643 0 00-.478-.214H3.857a.643.643 0 00-.643.711l.965 9A.643.643 0 004.82 18h8.358a.643.643 0 00.642-.575l.965-9a.643.643 0 00-.165-.497zM16.071 3.59h-3.214a.321.321 0 01-.321-.322V2.25A2.253 2.253 0 0010.286 0H7.714a2.26 2.26 0 00-2.25 2.215L5.45 3.272a.323.323 0 01-.322.318H1.93a1.286 1.286 0 000 2.571H16.07a1.286 1.286 0 000-2.571zM7.393 2.245a.323.323 0 01.321-.316h2.572a.321.321 0 01.321.321v1.018a.321.321 0 01-.321.322H7.699a.323.323 0 01-.322-.327z"/>'
          + '</svg>';
  classes: string;
  id: string;

  element: string; // 'a', 'button' o 'input'
  name: string;
  type: string;
  value: any;
  href: string;
  target: string;
  routerLink: string;
  routerLinkActiveClasses: string;
  disabled: boolean;
  preventDoubleClick: boolean;

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

  clickCount = 0;
  clickText: string;
  clickName: string;
  clickValue: string;

  clickCountForm = 0;
  submitsCountForm = 0;
  clickTextForm: string;
  clickValueForm: string;
  clickNameForm: string;
  submitResult: string;

  constructor() { }

  updateClickCountText(event: any): void {
    this.clickCount++;
    if (this.value) {
      this.clickValue = 'Value del boton clickado: ' + event.target.value;
    } else {
      this.clickValue = '';
    }
    if (this.name) {
      this.clickName =  'Name del boton clickado: ' + event.target.name;
    } else {
      this.clickName = '';
    }

    this.clickText = 'Detectado click nº ' + this.clickCount;
  }

  updateClickCountTextForm(event: any): void {
    this.clickCountForm++;
    if (this.value) {
      this.clickValueForm = 'Value del boton clickado: ' + event.target.value;
    } else {
      this.clickValueForm = '';
    }
    if (this.name) {
      this.clickNameForm =  'Name del boton clickado: ' + event.target.name;
    } else {
      this.clickNameForm = '';
    }
    this.clickTextForm = 'Detectado click nº ' + this.clickCountForm;
  }

  onSubmit(event: any): void {
    this.submitsCountForm++;
    this.submitResult = 'Detectado submit nº ' + this.submitsCountForm;
  }

}
