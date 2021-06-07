import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessageData, FieldsetData, HintData, ItemCheckboxData } from 'desy-angular';
import { ErrorMessageModel } from '../../shared/models/error-message-model';
import { FieldsetModel } from '../../shared/models/fieldset-model';
import { HintModel } from '../../shared/models/hint-model';
import { ItemCheckboxModel } from '../../shared/models/item-checkbox-model';

@Component({
  selector: 'app-demo-checkboxes',
  templateUrl: './demo-checkboxes.component.html'
})
export class DemoCheckboxesComponent implements OnInit {

  nameComponent = 'Checkboxes';

  value = [];
  form: FormGroup;
  formGroupContactClasses: string;

  fieldsetData: FieldsetData = new FieldsetModel();
  hintData: HintData = new HintModel();
  errorMessageData: ErrorMessageData = new ErrorMessageModel();

  // items contact
  itemsContact: ItemCheckboxData[] = [];
  // items custom
  itemCheckboxDataCustom: ItemCheckboxData = new ItemCheckboxModel();
  itemCheckboxData1: ItemCheckboxData = new ItemCheckboxModel();
  itemCheckboxData2: ItemCheckboxData = new ItemCheckboxModel();

  formGroupClasses: string;
  idPrefix: string;
  name: string;
  items: ItemCheckboxData[] = [];
  hasDividers: boolean;
  classes: string;
  id: string;
  describedBy: string;

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
    this.name = 'example';

    this.fieldsetData.legend.text = 'Which part of the Housing Act was your licence issued under?';
    this.hintData.text = 'Select one of the options below.';

    this.itemCheckboxData1.text = 'Sign in with Digital Cert';
    this.itemCheckboxData1.value = 'gateway';
    this.itemCheckboxData1.hintData.text = 'You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.';
    this.itemCheckboxData1.classes = 'bg-warning-light';
    this.itemCheckboxData1.conditional = true;
    this.itemCheckboxData1.isIndeterminate = true;

    this.itemCheckboxData2.html = '<span class=" block font-bold ">Part 2 of the Housing Act 2004</span> <span class=" font-normal ">For properties that are 3 or more stories high and occupied by 5 or more people</span>';
    this.itemCheckboxData2.value = 'verify';
    this.itemCheckboxData2.hintData = null;
    this.itemCheckboxData2.classes = 'bg-neutral-light';

    this.itemCheckboxDataCustom.text = 'opción que puedes modificar';
    this.itemCheckboxDataCustom.hintData.text = 'texto hint';
    this.itemCheckboxDataCustom.value = 3;

    this.form = new FormGroup({
      valueFormControl: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email]),
      phone: new FormControl(null, [Validators.minLength(9)]),
      phoneTxt: new FormControl(null, [Validators.minLength(9)]),
    });

    const itemPhone: ItemCheckboxData = new ItemCheckboxModel();
    itemPhone.value = 'phone';
    itemPhone.text = 'Phone';
    itemPhone.conditional = true;
    const itemEmail: ItemCheckboxData = new ItemCheckboxModel();
    itemEmail.value = 'email';
    itemEmail.text = 'Email';
    itemEmail.conditional = true;
    const itemText: ItemCheckboxData = new ItemCheckboxModel();
    itemText.value = 'text';
    itemText.text = 'Text message';
    itemText.conditional = true;

    this.itemsContact.push(itemPhone);
    this.itemsContact.push(itemEmail);
    this.itemsContact.push(itemText);

    this.form.valueChanges.subscribe(() => {
      if (this.form.invalid) {
        this.formGroupContactClasses = 'c-form-group--error';
      }else {
        this.formGroupContactClasses = '';
      }
    });
  }

  get valueFormControl(): AbstractControl { return this.form.get('valueFormControl'); }
  get email(): AbstractControl { return this.form.get('email'); }
  get phone(): AbstractControl { return this.form.get('phone'); }
  get phoneTxt(): AbstractControl { return this.form.get('phoneTxt'); }

  getItems(): ItemCheckboxData[] {
    const items = [];
    items.push(this.itemCheckboxData1);
    items.push(this.itemCheckboxData2);
    items.push(this.itemCheckboxDataCustom);
    return items;
  }

}
