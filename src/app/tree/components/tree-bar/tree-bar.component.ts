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
  }
  public itemList: Observable<Item[]>;
  public a: boolean;
  public parents:Item[];

  public get icon() {
    return this.visible ? '&#x25B2;' : '&#x25BC;';
  }

  items: Array<BreadcrumbsData>;
  item: ItemBreadcrumbsModel;
  constructor(private rutaActiva: ActivatedRoute, private treeSvc: TreeViewService) { }

  ngOnInit() {
    this.itemList = this.treeSvc.itemList.asObservable();
    this.testVal = +this.rutaActiva.snapshot.params['id'];
    const itemCrumb = new ItemBreadcrumbsModel();
    itemCrumb.text = 'Presupuesto';
    itemCrumb.html = 'Presupuesto';
    
    const itemCrumb2 = new ItemBreadcrumbsModel();
    itemCrumb2.text = 'Tomo_01_Proyecto de Ley';
    itemCrumb2.html = 'Tomo_01_Proyecto de Ley';
    //itemCrumb2.routerLink = '/section';
    
    const itemHtml = new ItemBreadcrumbsModel();
    itemHtml.text = 'Libro_02_Anexo I';
    itemHtml.html = 'Libro_02_Anexo I';
    
    this.item = new ItemBreadcrumbsModel();
    this.item.text = 'Pieza_01_Estado Letra A';
    this.item.html = 'Pieza_01_Estado Letra A';

    this.items = [];
    this.items.push(itemCrumb);
    this.items.push(itemCrumb2);
    this.items.push(itemHtml);
    this.items.push(this.item);
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

 

}
