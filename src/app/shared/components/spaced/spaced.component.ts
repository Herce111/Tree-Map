import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spaced',
  templateUrl: './spaced.component.html'
})
export class SpacedComponent {

  @Input() withBorder: boolean;

}
