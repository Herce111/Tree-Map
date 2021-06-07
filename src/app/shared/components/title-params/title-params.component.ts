import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-params',
  template: '<h4 class="mt-lg text-sm text-neutral-dark uppercase group">{{titleparams}}</h4>'
})
export class TitleParamsComponent {

  @Input() titleparams = 'Parámetros básicos';

}
