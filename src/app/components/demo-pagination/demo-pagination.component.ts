import { Component} from '@angular/core';

@Component({
  selector: 'app-demo-pagination',
  templateUrl: './demo-pagination.component.html'
})
export class DemoPaginationComponent {

  nameComponent = 'pagination';
  hasSelect: boolean;
  idPrefix: string;
  classesContainer: string;
  totalItems: number;
  itemsPerPage: number;
  hasPrevious: boolean;
  hasNext: boolean;
  previousText: string;
  nextText: string;
  classes: string;
  id: string;
  currentPage: number;

  selectedPage: number;
  selectedPageDefault: number;

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

  constructor() {
    this.totalItems = 5;
    this.itemsPerPage = 1;
    this.selectedPage = 2;
  }



}
