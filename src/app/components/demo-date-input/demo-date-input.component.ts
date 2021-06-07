import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessageData, FieldsetData, HintData, ItemDateInputData } from 'desy-angular';
import { FieldsetModel } from '../../shared/models/fieldset-model';
import { HintModel } from '../../shared/models/hint-model';
import { ErrorMessageModel } from '../../shared/models/error-message-model';
import { LabelModel } from '../../shared/models/label-model';

@Component({
  selector: 'app-demo-date-input',
  templateUrl: './demo-date-input.component.html'
})
export class DemoDateInputComponent implements OnInit, AfterContentChecked {

  nameComponent = 'Date-input';

  value;
  formItems: ItemDateInputData[] = [
    {
      name: 'day',
      labelText: 'día',
      classes: 'w-14',
      maxlength: 2
    },
    {
      name: 'month',
      labelText: 'mes',
      classes: 'w-14',
      maxlength: 2
    },
    {
      name: 'year',
      labelText: 'año',
      classes: 'w-20',
      maxlength: 4,
    }
  ];

  form = new FormGroup({
    date: new FormGroup({
      day: new FormControl(1, Validators.required),
      month: new FormControl(1, Validators.required),
      year: new FormControl(2000, Validators.required)
    })
  });
  formErrorMsg: string = null;

  itemDateInputData1: ItemDateInputData = {
    name: 'day',
    labelText: 'día',
    classes: 'w-14',
    maxlength: 2
  };

  itemDateInputData2: ItemDateInputData = {
    name: 'month',
    labelText: 'mes',
    classes: 'w-14',
    maxlength: 2
  };

  itemDateInputDataCustom: ItemDateInputData = {
    name: 'year',
    labelText: 'año',
    classes: 'w-20',
    maxlength: 4,
    labelData: new LabelModel()
  };

  items: ItemDateInputData[];

  fieldsetData: FieldsetData = new FieldsetModel();
  hintData: HintData = new HintModel();
  errorMessageData: ErrorMessageData = new ErrorMessageModel();

  namePrefix: string;
  classes: string;
  formGroupClasses: string;
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

  ngOnInit(): void {
    this.id = 'identificador';
    this.namePrefix = 'example';

    this.items = [
      this.itemDateInputData1,
      this.itemDateInputData2,
      this.itemDateInputDataCustom
    ];
  }

  ngAfterContentChecked(): void {
    if (this.form) {
      this.formErrorMsg = null;
      this.formItems.forEach(item => {
        item.hasErrors = this.form.get('date').get(item.name).invalid;
        if (item.hasErrors && !this.formErrorMsg) {
          this.formErrorMsg = `Campo ${item.labelText} inválido`;
        }
      });
    }
  }
}
