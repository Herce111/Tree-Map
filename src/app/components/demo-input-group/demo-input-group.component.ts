import { AfterContentChecked, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldsetModel } from '../../shared/models/fieldset-model';
import { HintModel } from '../../shared/models/hint-model';
import { ErrorMessageModel } from '../../shared/models/error-message-model';
import { ErrorMessageData, FieldsetData, HintData, ItemInputGroupData } from 'desy-angular';

@Component({
  selector: 'app-demo-input-group',
  templateUrl: './demo-input-group.component.html'
})
export class DemoInputGroupComponent implements AfterContentChecked {

  nameComponent = 'Input-group';

  // value = {tipoDoc: '2', numDoc: '123456Q'};
  value: any;

  items: ItemInputGroupData[] = [
    {
      labelText: 'Tipo',
      name: 'tipoDoc',
      classes: 'w-full lg:w-auto',
      formGroupClasses: 'mr-base',
      isSelect: true,
      hasErrors: false,
      selectItems: [
        {
          value: '1',
          text: 'NIF',
        },
        {
          value: '2',
          text: 'Pasaporte'
        }
      ]
    },
    {
      name: 'divider',
      divider: {
        text: 'y',
        classes: 'mr-base'
      },
      hasErrors: false
    },
    {
      name: 'numDoc',
      labelText: 'Número',
      classes: 'w-full lg:w-50',
      placeholder: 'Ej: 28999876V',
      maxlength: 9,
      hasErrors: false
    }
  ];
  form = new FormGroup({
    date: new FormGroup({
      tipoDoc: new FormControl('2', Validators.required),
      numDoc: new FormControl('11H', Validators.required)
    })
  });
  formErrorMsg: string = null;

  customItem: ItemInputGroupData = {
    name: 'numDoc',
    labelText: 'Número',
    labelData: {
      text: 'Número'
    },
    classes: 'w-full lg:w-50',
    placeholder: 'Ej: 28999876V'
  };
  itemsAlt: ItemInputGroupData[] = [
    {
      labelText: 'Tipo',
      name: 'tipoDoc',
      classes: 'w-full lg:w-auto',
      formGroupClasses: 'mr-base',
      isSelect: true,
      selectItems: [
        {
          value: '1',
          text: 'NIF'
        },
        {
          value: '2',
          text: 'Pasaporte'
        }
      ]
    },
    this.customItem
  ];

  fieldsetData: FieldsetData = new FieldsetModel();
  hintData: HintData = new HintModel();
  errorMessageData: ErrorMessageData = new ErrorMessageModel();

  namePrefix = 'example';
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

  ngAfterContentChecked(): void {
    if (this.form) {
      this.formErrorMsg = null;
      this.items.forEach(item => {
        item.hasErrors = !item.divider && this.form.get('date').get(item.name).invalid;
        if (item.hasErrors && !this.formErrorMsg) {
          this.formErrorMsg = `Campo ${item.labelText} vacío`;
        }
      });
    }
  }
}
