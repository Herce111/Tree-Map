import { Component, OnInit } from '@angular/core';
import { ErrorSummaryData } from 'desy-angular';
import { ErrorSummaryModel } from '../../shared/models/error-summary-model';

@Component({
  selector: 'app-demo-error-summary',
  templateUrl: './demo-error-summary.component.html'
})
export class DemoErrorSummaryComponent implements OnInit {

  nameComponent = 'error-summary';

  titleText = 'titleText editable';
  titleHtml: string;
  descriptionText = 'descriptionText editable';
  descriptionHtml: string;
  classes= 'p-base border-2 border-alert-base';

  errorList: Array<ErrorSummaryData>;
  item: ErrorSummaryModel;

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

    this.item = new ErrorSummaryModel();
    this.item.fragment = 'item';
    this.item.text = 'text para editar';
    this.item.html = 'html para editar';
    this.item.id = 'id para editar';

    this.errorList = [];
    this.errorList.push(this.item);
  }

}
