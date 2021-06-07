import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pill',
  templateUrl: './demo-pill.component.html'
})
export class DemoPillComponent {

  nameComponent = 'pill';

  text: string;
  html = 'Icon right pill <svg viewBox="0 0 140 140" class=" self-center ml-2 " aria-hidden="true" width=" .75em " height=" .75em ">' +
      '<path fill="currentColor" d="M85.91 71.77a2.5 2.5 0 010-3.54l46.16-46.16a10 10 0 10-14.14-14.14L71.77 54.09a2.5 2.5 0 01-3.54 0L22.07 7.93A10 10 0 007.93 22.07l46.16 46.16a2.5 2.5 0 010 3.54L7.93 117.93a10 10 0 0014.14 14.14l46.16-46.16a2.5 2.5 0 013.54 0l46.16 46.16a10 10 0 0014.14-14.14z">' +
      '</svg>';
  type: string;
  href: string;
  target: string;
  routerLink: string;
  routerLinkActiveClasses: string;
  classes: string;

  // Atributos de accesibilidad
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

  clickCount = 0;
  clickText: string;

  constructor() { }

  updateClickCountText(event: any): void {
    this.clickCount++;
    this.clickText = 'Detectado click nº ' + this.clickCount;
  }


}
