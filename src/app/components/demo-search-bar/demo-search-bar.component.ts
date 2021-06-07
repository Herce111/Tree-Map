import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelModel } from '../../shared/models/label-model';
import { ErrorMessageModel } from '../../shared/models/error-message-model';
import { LabelData, ErrorMessageData } from 'desy-angular';

@Component({
  selector: 'app-demo-search-bar',
  templateUrl: './demo-search-bar.component.html'
})
export class DemoSearchBarComponent implements OnInit {

  nameComponent = 'SearchBar';

  value: string;
  form: FormGroup;

  id: string;
  describedBy: string;
  labelData: LabelData = new LabelModel();
  errorMessageData: ErrorMessageData = new ErrorMessageModel();
  buttonClasses: string;
  classes: string;
  placeholder: string;
  disabled: string;

  ariaControls: string;
  ariaCurrent: string;
  ariaDescribedBy: string;
  ariaDisabled: string;
  ariaErrorMessage: string;
  ariaExpanded: string;
  ariaHasPopup: string;
  ariaHidden: string;
  ariaLabel: string;
  ariaLabelledBy: string;
  ariaLive: string;
  role: string;
  tabindex: string;

  clickCount = 0;
  clickText: string;
  clickCountForm = 0;
  clickTextForm: string;

  constructor() { }

  ngOnInit(): void {
    this.value = 'Valor por defecto en ngModel';
    this.id = 'search-bar-id';
    this.labelData.text = 'Texto en label';
    this.labelData.classes = 'sr-only';
    this.labelData.for = 'searchbar';
    this.errorMessageData.text = 'Texto en errorMessage';
    this.errorMessageData.html = 'Html en <b>errorMessage</b>';
    this.placeholder = 'Texto en placeholder';
    this.classes = 'w-full';
    this.form = new FormGroup({
      valueFormControl: new FormControl('Valor por defecto en form', [Validators.required])
    });
  }

  updateClickCountText(event: any): void {
    this.clickCount++;
    this.clickText = 'Detectado evento emitido nº ' + this.clickCount;
  }

  updateClickCountTextForm(event: any): void {
    this.clickCountForm++;
    this.clickTextForm = 'Detectado evento emitido nº ' + this.clickCountForm;
  }

}
