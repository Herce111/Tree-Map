import { Component, OnInit } from '@angular/core';
import { ModalIconData, ModalButtonData, ModalData } from 'desy-angular';
import { ModalButtonModel } from '../../shared/models/modal-button-model';
import { ModalOptions } from 'desy-angular';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.component.html'
})
export class DemoModalComponent implements OnInit, ModalOptions {

  nameComponent = 'modal';

  title: ModalData;
  description: ModalData;

  itemsPrimary: Array<ModalButtonData>;
  itemP: ModalButtonModel;
  itemsSecondary: Array<ModalButtonData>;
  itemS: ModalButtonModel;

  icon: ModalIconData;

  isDismissible: boolean;
  id: string;
  classes: string;

  role: string;
  ariaLabel: string;
  ariaDescribedBy: string;
  ariaLabelledBy: string;
  ariaHidden: string;
  ariaDisabled: string;
  ariaControls: string;
  ariaCurrent: string;
  ariaLive: string;
  ariaExpanded: string;
  ariaErrorMessage: string;
  ariaHasPopup: string;
  tabindex: string;

  constructor() { }

  ngOnInit(): void {

    this.itemP = new ModalButtonModel();
    this.itemP.text = 'texto itemPrimary ';
    this.itemP.classes = 'c-button--primary';

    this.itemS = new ModalButtonModel();
    this.itemS.text = 'texto itemsSecondary ';
    this.itemS.classes = 'c-button--secondary' ;

    this.itemsPrimary = [];
    this.itemsPrimary.push(this.itemP);

    this.itemsSecondary = [];
    this.itemsSecondary.push(this.itemS);

    this.title = {
      text: 'Aviso',
      html: null,
      classes: ''
    };
    this.description = {
      text: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.',
      html: null,
      classes: null
    };
    this.icon = {
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="block w-16 h-16 text-primary-light" aria-label="Pregunta" focusable="false"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M52.5 52.5a17.5 17.5 0 1123.333 16.503A8.75 8.75 0 0070 77.257v5.868M70 100.625a2.188 2.188 0 102.188 2.188A2.188 2.188 0 0070 100.624h0" stroke-linecap="round" stroke-linejoin="round" stroke-width="8.749995"/><path d="M4.375 70a65.625 65.625 0 10131.25 0 65.625 65.625 0 10-131.25 0z" stroke-miterlimit="10" stroke-width="8.749995"/></g></svg>',
      type: null
    };
    this.id = 'id contenedor';
  }


}
