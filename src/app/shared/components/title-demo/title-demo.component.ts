import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-demo',
  templateUrl: './title-demo.component.html'
})
export class TitleDemoComponent {

  @Input() name: string;

}
