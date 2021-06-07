import { Component, OnInit } from '@angular/core';
import { LabelData, HintData, ErrorMessageData } from 'desy-angular';
import { LabelModel } from '../../shared/models/label-model';
import { HintModel } from '../../shared/models/hint-model';
import { ErrorMessageModel } from '../../shared/models/error-message-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-textarea',
  templateUrl: './demo-textarea.component.html'
})
export class
DemoTextareaComponent implements OnInit {

  nameComponent = 'Textarea';

  value: string;
  form: FormGroup;

  id: string;
  name: string;
  placeholder: string;
  rows: number;
  describedBy: string;
  labelData: LabelData = new LabelModel();
  hintData: HintData = new HintModel();
  errorMessageData: ErrorMessageData = new ErrorMessageModel();
  formGroupClasses: string;
  classes: string;
  autocomplete: string;
  disabled: boolean;
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
    this.id = 'textarea-id';
    this.name = 'textarea-name';
    this.labelData.text = 'Texto en label';
    this.hintData.text = 'Texto en hint';
    this.errorMessageData.text = 'Texto en errorMessage';
    this.errorMessageData.html = 'Html en <b>errorMessage</b>';
    this.classes = 'w-full';
    this.form = new FormGroup({
      valueFormControl: new FormControl('Valor por defecto en form', [Validators.required])
    });
  }

}
