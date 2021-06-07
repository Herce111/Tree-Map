import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-boolean',
  templateUrl: './input-boolean.component.html'
})
export class InputBooleanComponent implements OnInit {

  @Input() nameComponent: string;
  @Input() nameProperty: string;
  @Input() description: string;
  @Input() target: boolean;
  @Output() targetChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  nameComponenetProperty: string;

  constructor() { }

  ngOnInit(): void {
    this.nameComponenetProperty = this.nameComponent + '-' + this.nameProperty;
  }

}
