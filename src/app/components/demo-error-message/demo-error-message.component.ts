import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-error-message',
  templateUrl: './demo-error-message.component.html'
})
export class DemoErrorMessageComponent {

  nameComponent = 'error-message';

  txt = 'Error message about full name goes here';
  visuallyHiddenText: string;
  html: string;
  htmlEmit: string;
  id: string;
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

  timeout: any;

  constructor() { }

  htmlChange(value: string): void {
    // sino al editar da un error de que el elemento html ya existe
    this.htmlEmit = null;
    this.html = value;

    if (value){
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.htmlEmit = value;
      }, 100);
    }
  }

}
