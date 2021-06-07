import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html'
})
export class DemoDetailsComponent {

  nameComponent = 'details';

  summaryText = 'Where to find your TSG Number';
  summaryHtml: string;
  summaryClasses: string;
  containerClasses: string;
  content = 'Your TSG Number can be found on<ul>  <li>your TSG card</li>  <li>your payslip</li> <li>P60</li>  <li>benefits information</li>  <li>tax return</li></ul>';
  id: string;
  open: boolean;
  classes: string;

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
