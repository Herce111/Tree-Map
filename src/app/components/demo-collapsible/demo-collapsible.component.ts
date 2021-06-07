import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-collapsible',
  templateUrl: './demo-collapsible.component.html'
})
export class DemoCollapsibleComponent {

  nameComponent = 'collapsible';

  phone: string;

  headerText = 'headerText de prueba';
  headerHtml: string;
  headerHtmlEmit: string;
  text = 'text de prueba';
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

  timeout: any;

  headerHtmlChange(value: string): void {
    // sino al editar da un error de que el elemento html ya existe
    this.headerHtmlEmit = null;
    this.headerHtml = value;

    if (value){
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.headerHtmlEmit = value;
      }, 100);
    }
  }

}
