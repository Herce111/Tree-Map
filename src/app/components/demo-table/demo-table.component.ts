import { Component, OnInit } from '@angular/core';
import { CellData } from 'desy-angular';
import { CellModel } from '../../shared/models/table-model';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html'
})
export class DemoTableComponent implements OnInit {

  nameComponent = 'table';

  rows: Array<CellData[]>;
  itemRow: CellModel;
  head: Array<CellData>;
  itemHead: CellModel;

  filaRows1;
  filaRows2;

  caption: string;
  captionClasses: string;
  firstCellIsHeader: boolean;
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

  constructor() { }

  ngOnInit(): void {

    const itemRow1 = new CellModel();
    itemRow1.text = 'January-text';
    itemRow1.html = 'January-html';
    itemRow1.classes = '';
    itemRow1.id = 'itemRow1-id';

    const itemRow2 = new CellModel();
    itemRow2.text = '85€-text';
    itemRow2.html = '85€-html';
    itemRow2.classes = 'text-right';
    itemRow2.id = 'itemRow2-id';


    this.itemRow = new CellModel();
    this.itemRow.text = 'itemRow-text para editar';
    this.itemRow.html = '';
    this.itemRow.classes = 'text-right';
    this.itemRow.id = 'id para editar';


    const itemHead1 = new CellModel();
    itemHead1.text = 'Month you apply';
    itemHead1.html = 'Month you apply-Html';
    itemHead1.classes = '';
    itemHead1.id = 'itemHead1';


    const itemHead2 = new CellModel();
    itemHead2.text = 'Rate for bicycles-Text';
    itemHead2.html = 'Rate for bicycles-Html';
    itemHead2.classes = '';
    itemHead2.id = 'itemHead2';

    this.itemHead = new CellModel();
    this.itemHead.text = 'itemHead-text para editar';
    this.itemHead.html = '';
    this.itemHead.classes = '';
    this.itemHead.id = 'id para editar';

    this.rows = [];
    this.filaRows1 = [];
    this.filaRows2 = [];
    this.filaRows1.push(itemRow1);
    this.filaRows1.push(itemRow2);
    this.filaRows1.push(this.itemRow);
    this.rows.push(this.filaRows1);

    this.head = [];
    this.head.push(itemHead1);
    this.head.push(itemHead2);
    this.head.push(this.itemHead);
  }

}
