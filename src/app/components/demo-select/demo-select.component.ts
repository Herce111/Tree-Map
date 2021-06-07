import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LabelModel} from '../../shared/models/label-model';
import {HintModel} from '../../shared/models/hint-model';
import {ErrorMessageModel} from '../../shared/models/error-message-model';
import { LabelData, HintData, ErrorMessageData, SelectItemData} from 'desy-angular';

@Component({
  selector: 'app-demo-select',
  templateUrl: './demo-select.component.html'
})
export class DemoSelectComponent implements OnInit {

  nameComponent = 'select';

  labelData: LabelData = new LabelModel();
  hintData: HintData = new HintModel();
  errorMessageData: ErrorMessageData = new ErrorMessageModel();
  name: string;
  items: SelectItemData[] = [
    {
      text: 'sin value', role: null, ariaLabel: null, ariaDescribedBy: null, ariaLabelledBy: null, ariaHidden: null, ariaDisabled: null,
      ariaControls: null, ariaCurrent: null, ariaLive: null, ariaExpanded: null, ariaErrorMessage: null, ariaHasPopup: null
    },
    {
      text: 'selected!!', value: 'selected', selected: true,
      role: 'a', ariaLabel: 'a', ariaDescribedBy: 'a', ariaLabelledBy: 'a', ariaHidden: 'a', ariaDisabled: 'a',
      ariaControls: 'a', ariaCurrent: 'a', ariaLive: 'a', ariaExpanded: 'a', ariaErrorMessage: 'a', ariaHasPopup: 'a'
    },
    {
      text: 'disable', value: 'disable', selected: false, disabled: true,
      role: null, ariaLabel: null, ariaDescribedBy: null, ariaLabelledBy: null, ariaHidden: null, ariaDisabled: null,
      ariaControls: null, ariaCurrent: null, ariaLive: null, ariaExpanded: null, ariaErrorMessage: null, ariaHasPopup: null
    },
    ];
  describedBy: string;
  formGroupClasses: string;
  disabled: boolean;
  id: string;
  classes: string;
  role: string;
  ariaLabel: string;
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

  value = 'selected';
  form: FormGroup;

  ngOnInit(): void {
    this.id = 'select';
    this.name = 'select';
    this.labelData.text = 'Texto en label';
    this.hintData.text = 'Texto en hint';
    this.errorMessageData.text = 'Texto en errorMessage';
    this.errorMessageData.html = 'Html en <b>errorMessage</b>';
    this.classes = 'w-full';
    this.form = new FormGroup({
      valueFormControl: new FormControl()
    });
  }

  generateObjects(event): void {
      const item: SelectItemData = {
        value: event,
        text: 'Opcion ' + event,
        selected: false,
        disabled: false,
        // accessibilidad
        role: '',
        ariaLabel: '',
        ariaDescribedBy: '',
        ariaLabelledBy: '',
        ariaHidden: '',
        ariaDisabled: '',
        ariaControls: '',
        ariaCurrent: '',
        ariaLive: '',
        ariaExpanded: '',
        ariaErrorMessage: '',
        ariaHasPopup: ''
      };
      this.items.push(item);
  }

}
