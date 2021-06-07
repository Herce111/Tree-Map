import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-implementation-info',
  templateUrl: './implementation-info.component.html'
})
export class ImplementationInfoComponent {

  @Input() info: string;
  @Input() observations: string;

}
