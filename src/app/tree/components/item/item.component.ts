import { AfterViewChecked, Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Item } from '../../models/item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [     
    {       
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => ItemComponent),
      multi: true     
    } 
  ],  
})
export class ItemComponent implements ControlValueAccessor, AfterViewChecked {

  public expanded = false;
  @Input() item: Item;
  @Input() parametro: string;
  public get icon() {
    return !this.item.hijos.length
      ? '&#11044;'
      : this.expanded ? '&#9660;' : '&#9654;';
  }

  public get checked(){
    return this.item.caratula ? '&#10003;' : '';
  }

  public val:number;
  public get testVal() { return this.val; }
  public set testVal(val: number) {
    this.val = val;
    this.onChange(val)
    this.onTouched();
  }
  
  constructor(private renderer: Renderer2) {
  }


  ngAfterViewChecked(): void {
    if(this.parametro && this.parametro!='undefined'){
      this.expanded=true;
      if(+this.parametro == this.item.id){
        this.expanded=false;
        const el = document.getElementById('id'+this.item.id.toString());
        el.click();
      }

    }


    
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

  click(event:Event){
    const name = document.getElementsByClassName("name");
    for(let i=0;i<name.length;i++){
      this.renderer.removeClass(name[i], "focus:shadow-outline-focus");
      this.renderer.removeClass(name[i], "focus:text-black");
      this.renderer.removeClass(name[i], "focus:outline-none");
      this.renderer.removeClass(name[i], "focus:bg-warning-base");
    }
    this.renderer.addClass(event.target, "focus:shadow-outline-focus");
    this.renderer.addClass(event.target, "focus:text-black");
    this.renderer.addClass(event.target, "focus:outline-none");
    this.renderer.addClass(event.target, "focus:bg-warning-base");
  }

  

}
