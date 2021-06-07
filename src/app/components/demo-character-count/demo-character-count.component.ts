import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelData, HintData, ErrorMessageData } from 'desy-angular';
import { LabelModel } from '../../shared/models/label-model';
import { HintModel } from '../../shared/models/hint-model';
import { ErrorMessageModel } from '../../shared/models/error-message-model';

@Component({
  selector: 'app-demo-character-count',
  templateUrl: './demo-character-count.component.html'
})
export class DemoCharacterCountComponent implements OnInit {

  nameComponent = 'Character count';

  value: string;
  form: FormGroup;

  id: string;
  name: string;
  placeholder: string;
  rows: number;
  maxlength: number;
  maxwords: number;
  threshold: number;
  countbbdd: boolean;
  labelData: LabelData = new LabelModel();
  hintData: HintData = new HintModel();
  errorMessageData: ErrorMessageData = new ErrorMessageModel();
  formGroupClasses: string;
  countMessageClasses: string;
  classes: string;
  disabled: boolean;

  ariaControls: string;
  ariaCurrent: string;
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
    this.id = 'char-count-id';
    this.name = 'char-count-name';
    this.maxwords = 5;
    this.labelData.text = 'Texto en label';
    this.hintData.text = 'Texto en hint';
    this.errorMessageData.text = 'Texto en errorMessage';
    this.errorMessageData.html = 'Html en <b>errorMessage</b>';
    this.value = 'Valor por defecto en model. Estas palabras exceden el límite';
    this.classes = 'w-full';
    this.form = new FormGroup({
      valueFormControl: new FormControl('Valor por defecto en form. Estas palabras quedan fuera.', [Validators.required])
    });
  }

  onDisableChange(): void {
    if (this.disabled) {
      this.form.controls.valueFormControl.disable();
    } else {
      this.form.controls.valueFormControl.enable();
    }
  }

}
