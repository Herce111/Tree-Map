import { Component, OnInit } from '@angular/core';
import { LabelData, HintData, ErrorMessageData } from 'desy-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelModel } from '../../shared/models/label-model';
import { HintModel } from '../../shared/models/hint-model';
import { ErrorMessageModel } from '../../shared/models/error-message-model';

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html'
})
export class DemoInputComponent implements OnInit {

  nameComponent = 'Input';

  value: string;
  form: FormGroup;

  id: string;
  errorId: string;
  name: string;
  describedBy: string;
  labelData: LabelData = new LabelModel();
  hintData: HintData = new HintModel();
  errorMessageData: ErrorMessageData = new ErrorMessageModel();
  formGroupClasses: string;
  classes: string;
  autocomplete: string;
  disabled: boolean;
  pattern: string;
  type: string;
  inputmode: string;
  placeholder: string;
  maxlength: number;

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

  constructor() { }

  ngOnInit(): void {
    this.id = 'input-id';
    this.name = 'input-name';
    this.labelData.text = 'Texto en label';
    this.hintData.text = 'Texto en hint';
    this.errorMessageData.text = 'Texto en errorMessage';
    this.errorMessageData.html = 'Html en <b>errorMessage</b>';
    this.form = new FormGroup({
      valueFormControl: new FormControl('Valor por defecto en form', [Validators.required])
    });
  }

}
