import { Component } from '@angular/core';
import { DESY_COMPONENTS } from '../../shared/utils/constants';

@Component({
  selector: 'app-menu-components',
  templateUrl: './menu-components.component.html'
})
export class MenuComponentsComponent {

  listItems = DESY_COMPONENTS;

  sortBy(prop: string): any[] {
    return this.listItems.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
