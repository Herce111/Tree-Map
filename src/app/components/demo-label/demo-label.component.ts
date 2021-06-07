import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-label',
  templateUrl: './demo-label.component.html'
})
export class DemoLabelComponent implements OnInit {

  nameComponent = 'label';

  text = 'TSG number';
  html: string;
  for: string;
  isPageHeading = true;
  classes: string;
  id: string;

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
  ariaExpanded: string;
  ariaErrorMessage: string;
  ariaHasPopup: string;
  tabindex: string;

  constructor() { }

  ngOnInit(): void {
  }

}
