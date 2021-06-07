import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html'
})
export class InputTextComponent implements OnInit {

  @Input() nameComponent: string;
  @Input() nameProperty: string;
  @Input() description: string;
  @Input() placeholder: string;
  @Input() target: string;
  @Output() targetChange: EventEmitter<string> = new EventEmitter<string>();

  nameComponenetProperty: string;

  constructor() { }

  ngOnInit(): void {
    this.nameComponenetProperty = this.nameComponent + '-' + this.nameProperty;
  }

}
