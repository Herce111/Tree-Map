import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LabelData, HintData, ErrorMessageData } from 'desy-angular';
import { LabelModel } from '../../shared/models/label-model';
import { HintModel } from '../../shared/models/hint-model';
import { ErrorMessageModel } from '../../shared/models/error-message-model';

@Component({
  selector: 'app-demo-file-upload',
  templateUrl: './demo-file-upload.component.html'
})
export class DemoFileUploadComponent implements OnInit {

  nameComponent = 'file-upload';

  labelData: LabelData = new LabelModel();
  hintData: HintData = new HintModel();
  errorMessageData: ErrorMessageData = new ErrorMessageModel();
  name: string;
  describedBy: string;
  formGroupClasses: string;
  id: string;
  classes: string;
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
  accept: string;

  value: File;
  form: FormGroup;

  ngOnInit(): void {
    this.id = 'file-upload';
    this.name = 'file-upload';
    this.labelData.text = 'Texto en label';
    this.hintData.text = 'Texto en hint';
    this.errorMessageData.text = 'Texto en errorMessage';
    this.errorMessageData.html = 'Html en <b>errorMessage</b>';
    this.form = new FormGroup({
      valueFormControl: new FormControl()
    });
  }

}
