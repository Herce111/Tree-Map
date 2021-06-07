import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-skip-link',
  templateUrl: './demo-skip-link.component.html'
})
export class DemoSkipLinkComponent {

  nameComponent = 'skip-link';

  text = 'Saltar al contenido principal';
  html: string;
  fragment: string;
  classes = 'ds-focus';
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

}
