import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accessibility-inputs',
  templateUrl: './accessibility-inputs.component.html'
})
export class AccessibilityInputsComponent implements OnInit {

  @Input() id = 'id';
  @Input() title = 'Parámetros de accesibilidad';

  // Atributos de accesibilidad
  @Input() role: string;
  @Output() roleChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideRole: boolean;

  @Input() ariaLabel: string;
  @Output() ariaLabelChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideAriaLabel: boolean;

  @Input() ariaDescribedBy: string;
  @Output() ariaDescribedByChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideAriaDescribedBy: boolean;

  @Input() ariaLabelledBy: string;
  @Output() ariaLabelledByChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideAriaLabelledBy: boolean;

  @Input() ariaHidden: string;
  @Output() ariaHiddenChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideAriaHidden: boolean;

  @Input() ariaDisabled: string;
  @Output() ariaDisabledChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideAriaDisabled: boolean;

  @Input() ariaControls: string;
  @Output() ariaControlsChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideAriaControls: boolean;

  @Input() ariaCurrent: string;
  @Output() ariaCurrentChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideAriaCurrent: boolean;

  @Input() ariaLive: string;
  @Output() ariaLiveChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideAriaLive: boolean;

  @Input() ariaExpanded: string;
  @Output() ariaExpandedChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideAriaExpanded: boolean;

  @Input() ariaErrorMessage: string;
  @Output() ariaErrorMessageChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideAriaErrorMessage: boolean;

  @Input() ariaHasPopup: string;
  @Output() ariaHasPopupChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideAriaHasPopup: boolean;

  @Input() tabindex: string;
  @Output() tabindexChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() hideTabindex: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
