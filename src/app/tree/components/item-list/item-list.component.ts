import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Item } from '../../models/item';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  providers: [     
    {       
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => ItemListComponent),
      multi: true     
    } 
  ],  
})
export class ItemListComponent implements ControlValueAccessor, OnInit {

  public expanded = false;
  @Input() public hijos:Item[];
  @Input() public parametro:string;
  public item: Item;
  public val:number;
  public get testVal() { return this.val; }
  public set testVal(val: number) {
    this.val = val;
    this.onChange(val)
    this.onTouched();
  }

  constructor() {}

  ngOnInit(){
    this.item = new Item({nombre: 'Presupuesto', hijos: this.hijos});
  }

  public get icon() {
    return this.expanded ? 'fa-folder-open' : 'fa-folder';
  }

  



  private onChange = (v: any) => {};
  private onTouched = () => {};

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


