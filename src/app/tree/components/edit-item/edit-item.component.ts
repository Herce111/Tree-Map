import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';
import { TreeViewService } from '../../services/tree-view.service';
import { ActivatedRoute } from '@angular/router';
import { ItemCheckboxData } from 'desy-angular';
import { ItemCheckboxModel } from 'src/app/shared/models/item-checkbox-model';
import { ChangeDetectionStrategy } from "@angular/core";
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],

})
export class EditItemComponent implements OnInit {

  public nameComponent = 'Edit Section';
  public itemForm: FormGroup;
  public itemId: number;
  public generalError: boolean;
  public success: boolean;
  public itemList: Observable<Item[]>
  public hijos: Item[];
  public nombreI: AbstractControl;
  public itemsContact: ItemCheckboxData[] = [];

  constructor(private rutaActiva: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private treeSvc: TreeViewService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.itemList = this.treeSvc.itemList.asObservable();
    window.scrollTo(0, 0);
    this.itemId = +this.rutaActiva.snapshot.params['id'];
    this.changeValue(this.itemId);
    this.nombreI = this.itemForm.get('nombre');
    const item: ItemCheckboxData = new ItemCheckboxModel();
    item.value = true;
    item.text = 'Carátula';
    item.conditional = true;
    item.checked = false;
    item.disabled = true
    this.itemsContact.push(item);
  }

  get itemsToDelete() {
    const hijos: ItemCheckboxData[] = [];

    for (let valor of this.hijos) {
      const hijo: ItemCheckboxData = new ItemCheckboxModel();
      hijo.value = valor;
      hijo.text = valor.nombre;
      hijo.conditional = true;
      hijos.push(hijo);
    }

    return hijos;
  }

  changeValue(value) {
    const nombre = this.itemForm.get('nombre');
    const caratula = this.itemForm.get('caratula');
    const file = this.itemForm.get('file');
    const hijos = this.itemForm.get('hijos');
    if (value) {
      this.itemId = value;
      nombre.enable();
      caratula.enable();
      hijos.enable();
      const item = this.treeSvc.findItem(value);
      if (item.hijos) {
        file.disable();
      } else {
        file.enable();
      }
      this.itemForm.setValue({
        nombre: item.nombre,
        caratula: item.caratula,
        file: item.file,
        hijos: item.hijos
      }, { emitEvent: true });
      const itemCaratula = item.caratula;
      for (let item of this.itemsContact) {
        item.checked = itemCaratula;
        item.disabled = false;
      }
      if (this.itemForm.get('hijos').value) {
        this.hijos = this.itemForm.get('hijos').value;
      }
    } else {
      nombre.disable();
      caratula.disable();
      file.disable();
      hijos.disable();
      this.itemForm.setValue({
        nombre: '',
        caratula: false,
        file: '',
        hijos: []
      }, { emitEvent: false });
      for (let item of this.itemsContact) {
        item.disabled = true;
      }
    }

  }




  private createForm() {
    this.itemForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.pattern('^[A-ZÁÉÍÓÚÇÑ]{1}[A-ZÁÉÍÓÚÇÑa-záéíóúçñ0-9_ ]*')]],
      caratula: [true],
      file: [""],
      hijos: [[]],
    });
  }

  goBack() {
    this.router.navigateByUrl('/treeView');
  }

  onSubmit() {
    window.scrollTo(0, 0);
    if (this.itemForm.invalid || !this.itemId) {
      this.generalError = true;
      this.success = false;
      console.error("Something is wrong", this.itemForm);
    } else {
      let item = new Item(this.itemForm.value);
      this.treeSvc.editItem(this.itemId, item);
      this.generalError = false;
      this.success = true;
    }
  }
}
