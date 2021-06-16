import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TreeViewService } from '../../services/tree-view.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TreeViewComponent),
      multi: true
    }
  ],
})
export class TreeViewComponent implements ControlValueAccessor {

  public nameComponent = 'Tree View';

  public val: number;
  public get testVal() { return this.val; }
  public set testVal(val: number) {
    this.val = val;
    this.onChange(val)
    this.onTouched();
  }
  constructor(private treeSvc: TreeViewService) { }

  get itemList() {
    return this.treeSvc.itemList;
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


