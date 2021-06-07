import { Component} from '@angular/core';
import {
  ContentItemData,
  DescriptionItemData, IconItemData,
  TitleItemData
} from 'desy-angular';

@Component({
  selector: 'app-demo-item',
  templateUrl: './demo-item.component.html'
})
export class DemoItemComponent {

  nameComponent = 'item';

  titleHtml = 'Las entidades beneficiarias deberán tener su sede y actividad <strong class=\\" font-bold \\">principal en Aragón.</strong>';
  descriptionHtml = 'Documento acreditativo de registro de alta de la <strong class=\\" font-bold \\">asociación</strong>';
  contentHtml = 'Modelo: <a class=\" c-link break-all \" href=\" # \">aragon.es/tramites/19283-19348401/Modelofianza.pdf</a>';

  title: TitleItemData;
  description: DescriptionItemData;
  items: string[];
  content: ContentItemData;
  icon: IconItemData;
  isDraggable: boolean;
  isLocked: boolean;
  id: string;
  classes: string;

  // Atributos de accesibilidad
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

  constructor() {
    this.title = {
      text: 'Registro de alta de la asociación',
      html: null,
      classes: 'font-bold'
    };
    this.description = {
      text: 'Documento acreditativo de registro de alta de la asociación',
      html: null,
      classes: null
    };
    this.items = [ 'Desde modelo', 'Obligatorio previo a resolución', 'Condicionado'];
    this.content = {
      text: null,
      html: 'Modelo: <a class=\" c-link break-all \" href=\" # \">aragon.es/tramites/19283-19348401/Modelofianza.pdf</a>',
      classes: 'text-neutral-dark'
    };
    this.icon = {
      type: 'document',
      html: null
    };
  }

  changeItems(event): void {
    this.items = [ 'Desde modelo', 'Obligatorio previo a resolución', 'Condicionado'];
    this.items.length = event;
  }

}
