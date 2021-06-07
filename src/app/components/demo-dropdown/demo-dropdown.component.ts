import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-dropdown',
  templateUrl: './demo-dropdown.component.html'
})
export class DemoDropdownComponent {

  nameComponent = 'dropdown';

  text = 'Desplegable';
  html: string;
  hiddenText: string;
  classes: string;
  classesTooltip: string;
  classesContainer: string;
  id: string;
  disabled: boolean;

  // Atributos de accesibilidad
  role: string;
  ariaLabel: string;
  ariaDescribedBy: string;
  ariaLabelledBy: string;
  ariaHidden: string;
  ariaDisabled: string;
  ariaControls: string;
  ariaCurrent: string;
  ariaLive: string;
  ariaErrorMessage: string;
  tabindex: string;

  clickCount = 0;
  clickText: string;

  clickCountList = 0;
  clickTextList: string;

  updateClickCountText(): void {
    this.clickCount++;
    this.clickText = 'Detectado click nº ' + this.clickCount;
  }

  updateClickCountTextList(): void {
    this.clickCountList++;
    this.clickTextList = 'Detectado click nº ' + this.clickCountList;
  }

}
