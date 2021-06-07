import { Component} from '@angular/core';
import { NavItemData, NavItemEventData } from 'desy-angular';
import {NavItemModelComponent} from "../../shared/models/nav-item-model.component";

@Component({
  selector: 'app-demo-nav',
  templateUrl: './demo-nav.component.html'
})
export class DemoNavComponent {

  nameComponent = 'nav';

  items: Array<NavItemData>;
  classes: string;
  isMenu: boolean;
  idPrefix: string;

  selectedItem: NavItemData;

  itemBasic: NavItemData = new NavItemModelComponent();
  itemDisabled: NavItemData = new NavItemModelComponent();
  itemActive: NavItemData = new NavItemModelComponent();
  itemHtml: NavItemData = new NavItemModelComponent();
  itemClasses: NavItemData = new NavItemModelComponent();
  itemCustom: NavItemData = new NavItemModelComponent();

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
    this.items = [];
    this.itemDisabled.text = 'disabled';
    this.itemDisabled.href = 'www.google.es';
    this.itemDisabled.id = 'item-nav-disabled';
    this.itemDisabled.disabled = true;
    this.itemDisabled.target = '';

    this.itemActive.text = 'active con divider';
    this.itemActive.href = 'www.google.es';
    this.itemActive.id = 'item-nav-active';
    this.itemActive.active = true;
    this.itemActive.target = '';
    this.itemActive.divider = true;

    this.itemHtml.html = '<strong>html</strong>';
    this.itemHtml.routerLink = '/componentes';
    this.itemHtml.id = 'item-nav-html';
    this.itemHtml.target = '';

    this.itemClasses.text = 'bg-warning-base';
    this.itemClasses.classes = 'bg-warning-base';
    this.itemClasses.routerLink = './';
    this.itemClasses.fragment = 'item-nav-warning';
    this.itemClasses.id = 'item-nav-classes';

    this.itemBasic.text = 'Opción básica';
    this.itemBasic.href = 'www.google.es';
    this.itemBasic.target = '_blank';

    this.itemCustom.text = 'opción modificable';
    this.itemCustom.href = 'www.google.es';
    this.itemCustom.target = '_blank';
  }

  getItems(): NavItemData[] {
    const items = [];
    items.push(this.itemDisabled);
    items.push(this.itemActive);
    items.push(this.itemHtml);
    items.push(this.itemClasses);
    items.push(this.itemBasic);
    items.push(this.itemCustom);
    return items;
  }

  handleClickEvent(event: NavItemEventData): void {
    this.selectedItem = event.item;
  }
}
