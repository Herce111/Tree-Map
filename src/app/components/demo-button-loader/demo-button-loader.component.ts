import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-button-loader',
  templateUrl: './demo-button-loader.component.html'
})
export class DemoButtonLoaderComponent {

  nameComponent = 'button-loader';

  loaderText: string;
  loaderClasses: string;
  state = 'is-loading';
  successText: string;

  text = 'Loading';
  html: string;
  classes = 'c-button-loader--is-loading';
  id: string;

  element: string; // 'a', 'button' o 'input'
  name = 'loading';
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

  clickCountForm = 0;
  submitsCountForm = 0;
  clickTextForm: string;
  submitResult: string;

  autoButtonHint: string;
  autoButtonState: string;
  autoButtonClass: string;
  autoButtonDisabled: boolean;

  updateClickCountText(): void {
    this.clickCount++;
    this.clickText = 'Detectado click nº ' + this.clickCount;
  }

  updateClickCountTextForm(): void {
    this.clickCountForm++;
    this.clickTextForm = 'Detectado click nº ' + this.clickCountForm;
  }

  onSubmit(): void {
    this.submitsCountForm++;
    this.submitResult = 'Detectado submit nº ' + this.submitsCountForm;
  }

  onAutoButton(): void {
    if (!this.autoButtonState) {
      this.autoButtonState = 'is-loading';
      this.autoButtonClass = 'c-button-loader--is-loading';
      this.autoButtonDisabled = true;
      this.autoButtonHint = 'Carga de 3 segundos...';
      setTimeout(() => {
        this.autoButtonState = 'is-success';
        this.autoButtonClass = 'c-button-loader--is-success';
        this.autoButtonHint = 'Reiniciando en 3 segundos...';
        setTimeout(() => {
          this.autoButtonState = null;
          this.autoButtonClass = '';
          this.autoButtonHint = '';
          this.autoButtonDisabled = false;
        }, 3000);
      }, 3000);
    }
  }
}
