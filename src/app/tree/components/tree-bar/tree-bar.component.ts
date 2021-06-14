import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsData } from 'desy-angular';
import { Observable, observable } from 'rxjs';
import { ItemBreadcrumbsModel } from 'src/app/shared/models/item-breadcrumbs-model';
import { Item } from '../../models/item';
import { TreeViewService } from '../../services/tree-view.service';

@Component({
  selector: 'app-tree-bar',
  templateUrl: './tree-bar.component.html',
  styleUrls: ['./tree-bar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TreeBarComponent),
      multi: true
    }
  ],
})
export class TreeBarComponent implements OnInit, ControlValueAccessor {

  public visible: boolean;
  public val: number;
  public get testVal() { return this.val; }
  public set testVal(val: number) {
    this.val = val;
    this.onChange(val)
    this.onTouched();
    this.createBreadCrumb(val);
  }
  public itemList: Observable<Item[]>;
  public parents: Item[];

  public get icon() {
    return this.visible ? '&#x25B2;' : '&#x25BC;';
  }

  items: Array<BreadcrumbsData>;
  item: ItemBreadcrumbsModel;
  constructor(private rutaActiva: ActivatedRoute, private treeSvc: TreeViewService) { }

  ngOnInit() {
    this.itemList = this.treeSvc.itemList.asObservable();
    if(this.rutaActiva.snapshot.params['id']){
      this.testVal = +this.rutaActiva.snapshot.params['id'];
      this.visible=true;
    }
  }


  private onChange = (v: any) => { };
  private onTouched = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(val: number): void {
    this.val = val;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  private createBreadCrumb(v: any) {
    this.items = [];
    if (this.testVal) {

      const parents = this.treeSvc.findParents(v);
      const hijo = this.treeSvc.findItem(v);


      //push de presupuesto
      const pesupuestoCrumb = new ItemBreadcrumbsModel();
      pesupuestoCrumb.text = 'Presupuesto';
      pesupuestoCrumb.html = 'Presupuesto';
      this.items.push(pesupuestoCrumb);


      //push de los padres
      const itemCrumb = new ItemBreadcrumbsModel();
      itemCrumb.text = parents.nombre;
      itemCrumb.html = parents.nombre;
      this.items.push(itemCrumb);
      
      if (parents.id != hijo.id) {
        //push del item actual
        this.item = new ItemBreadcrumbsModel();
        this.item.text = hijo.nombre;
        this.item.html = hijo.nombre;
        this.items.push(this.item);
      }
    }
  }



}
