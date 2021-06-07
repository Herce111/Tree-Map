import { Component, OnInit } from '@angular/core';
import { CellModel, HeadCellModel, RowModel } from '../../shared/models/table-model';
import { OrderBy } from 'desy-angular';

@Component({
  selector: 'app-demo-table-advanced',
  templateUrl: './demo-table-advanced.component.html'
})
export class DemoTableAdvancedComponent implements OnInit {

  nameComponent = 'Table-advanced';

  caption: string;
  captionClasses: string;
  firstCellIsHeader: boolean;
  hasCheckboxes: boolean;
  idPrefix: string;
  classes: string;
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

  rowsChecked: any;
  rowsChecked2: any;

  itemCell: CellModel;
  itemRow: RowModel;
  itemHead: HeadCellModel;

  constructor() {}

  ngOnInit(): void {
    this.classes = 'min-w-full';
    this.itemCell = new CellModel();
    this.itemCell.text = '125€';
    this.itemCell.classes = 'text-right';
    this.itemRow = new RowModel();
    this.itemRow.id = 'miFila';
    this.itemRow.cellsList = [{ text: 'Third row' }, { text: 'March' }, { text: '165€', classes: 'text-right'}, this.itemCell];
    this.itemHead = { text: 'Rate for vehicles', orderBy: OrderBy.none, classes: 'text-right', hasFilter: true};

  }

}
