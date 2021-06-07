import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemCheckboxData } from 'desy-angular';
import { ItemCheckboxModel } from 'src/app/shared/models/item-checkbox-model';
import { Item } from '../../models/item';
import { TreeViewService } from '../../services/tree-view.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  public nameComponent = 'Create Section';
  public limiteLvl: boolean;
  public itemForm: FormGroup;
  public itemId: number;
  public generalError: boolean;
  public success: boolean;
  public item: Item;
  public nombreI: AbstractControl;
  public itemsCover: ItemCheckboxData[] = [];
  constructor(private fb: FormBuilder, private router: Router, private treeSvc: TreeViewService) {
    this.createForm();
  }

  get itemList() {
    return this.treeSvc.itemList;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.nombreI = this.itemForm.get('nombre');
    this.addItemToItemsCover();
  }

  private addItemToItemsCover() {
    const item: ItemCheckboxData = new ItemCheckboxModel();
    item.value = true;
    item.text = 'Carátula';
    item.conditional = true;
    item.checked = false;
    this.itemsCover.push(item);
  }

  private removeItemsFromItemsCover() {
    this.itemsCover = [];
  }

  private createForm() {
    this.itemForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.pattern('^[A-ZÁÉÍÓÚÇÑ]{1}[A-ZÁÉÍÓÚÇÑa-záéíóúçñ0-9_ ]*')]],
      caratula: [false],
      file: [""],
    });
  }



  private resetForm() {
    this.itemForm.setValue({
      nombre: "",
      caratula: false,
      file: ""
    }, { emitEvent: false });

    this.removeItemsFromItemsCover();
    this.addItemToItemsCover();

    for (let control of Object.values(this.itemForm.controls)) {
      control.markAsPristine();
      control.markAsUntouched();
    }
  }

  onSubmit() {

    window.scrollTo(0, 0);
    if (this.itemForm.invalid || this.itemId == undefined) {
      this.generalError = true;
      this.limiteLvl = false;
      this.success = false;
      console.error("Something is wrong", this.itemForm);
    } else {
      let item = new Item(this.itemForm.value);
      if(item.caratula[0]!=true){
        item.caratula=false;
      }
      try {
        this.treeSvc.addItem(item, this.itemId, 1);
        this.generalError = false;
        this.success = true;
        this.limiteLvl = false;
      } catch (error) {
        this.limiteLvl = true;
      } finally {
        this.resetForm();
      }



    }
  }

  goBack() {
    this.router.navigateByUrl('/treeView');
  }

}
