import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessageData, FieldsetData, HintData, ItemRadioData } from 'desy-angular';
import { ErrorMessageModel } from '../../shared/models/error-message-model';
import { FieldsetModel } from '../../shared/models/fieldset-model';
import { HintModel } from '../../shared/models/hint-model';
import { ItemRadioModel } from '../../shared/models/item-radio-model';

@Component({
  selector: 'app-demo-radios',
  templateUrl: './demo-radios.component.html'
})
export class DemoRadiosComponent implements OnInit {

  nameComponent = 'Radios';

  value = 'no';
  form: FormGroup;
  formGroupContactClasses: string;

  fieldsetData: FieldsetData = new FieldsetModel();
  hintData: HintData = new HintModel();
  errorMessageData: ErrorMessageData = new ErrorMessageModel();

  // items contact
  itemsContact: ItemRadioData[] = [];
  // items custom
  itemRadioDataCustom: ItemRadioData = new ItemRadioModel();
  itemRadioData1: ItemRadioData = new ItemRadioModel();
  itemRadioData2: ItemRadioData = new ItemRadioModel();

  formGroupClasses: string;
  idPrefix: string;
  name: string;
  items: ItemRadioData[] = [];
  hasDividers: boolean;
  classes: string;
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
    this.name = 'example';

    this.fieldsetData.legend.text = 'How do you want to sign in?';
    this.hintData.text = 'Please, choose the right answer.';

    this.itemRadioData1.text = 'Sign in with Digital Cert';
    this.itemRadioData1.value = 'gateway';
    this.itemRadioData1.hintData.text = 'You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.';
    this.itemRadioData1.classes = 'bg-warning-light';
    this.itemRadioData1.conditional = true;


    this.itemRadioData2.html = '<span class=" block font-bold ">Part 2 of the Housing Act 2004</span> <span class=" font-normal ">For properties that are 3 or more stories high and occupied by 5 or more people</span>';
    this.itemRadioData2.value = 'verify';
    this.itemRadioData2.hintData = null;
    this.itemRadioData2.classes = 'bg-neutral-light';

    this.itemRadioDataCustom.text = 'opción que puedes modificar';
    this.itemRadioDataCustom.hintData.text = 'texto hint';
    this.itemRadioDataCustom.value = 3;

    this.form = new FormGroup({
      valueFormControl: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email]),
      phone: new FormControl(null, [Validators.minLength(9)]),
      phoneTxt: new FormControl(null, [Validators.minLength(9)]),
    });

    const itemPhone: ItemRadioData = new ItemRadioModel();
    itemPhone.value = 'phone';
    itemPhone.text = 'Phone';
    itemPhone.conditional = true;
    const itemEmail: ItemRadioData = new ItemRadioModel();
    itemEmail.value = 'email';
    itemEmail.text = 'Email';
    itemEmail.conditional = true;
    const itemText: ItemRadioData = new ItemRadioModel();
    itemText.value = 'text';
    itemText.text = 'Text message';
    itemText.conditional = true;
    const divider: ItemRadioData = new ItemRadioModel();
    divider.divider = 'or';

    this.itemsContact.push(itemPhone);
    this.itemsContact.push(itemEmail);
    this.itemsContact.push(divider);
    this.itemsContact.push(itemText);

    this.form.valueChanges.subscribe(val => {
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

  getItems(): ItemRadioData[] {
    const items = [];
    items.push(this.itemRadioData1);
    items.push(this.itemRadioData2);
    items.push(this.itemRadioDataCustom);
    return items;
  }

}
