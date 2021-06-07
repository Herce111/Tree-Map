import { Component, OnInit } from '@angular/core';
import { MenuVerticalItemsData } from 'desy-angular';
import { MenuVerticalModel, MenuVerticalSubItemsModel } from '../../shared/models/menu-vertical-model';

@Component({
  selector: 'app-demo-menu-vertical',
  templateUrl: './demo-menu-vertical.component.html'
})
export class DemoMenuVerticalComponent implements OnInit {

  nameComponent = 'menu-vertical';

  id: string;
  idPrefix: string;
  expandable: boolean;
  items: Array<MenuVerticalItemsData>;
  item: MenuVerticalModel;

  subItem: MenuVerticalSubItemsModel;

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

  ngOnInit(): void {

    this.id = '';
    this.idPrefix = 'idPrefix';
    this.expandable = false;

    const menu1 = new MenuVerticalModel();
    const menu1SubItem = new MenuVerticalSubItemsModel();
    const menu2SubItem = new MenuVerticalSubItemsModel();
    menu1.id = '';
    menu1.text = 'Item1';
    menu1.html = '';
    menu1.classes = '';
    menu1.href = '';
    menu1.routerLink = '';
    menu1.routerLinkActiveClasses = '';
    menu1.fragment = '';
    menu1.target = '';
    menu1.expanded = false;
    menu1.disabled = false;
    menu1.divider = false;
    menu1.sub.id = '';
    menu1.sub.html = 'Item.Panel.Html Tab1';
    menu1.sub.classes = null;
    menu1.sub.items = [];

    menu1SubItem.text = 'Subitem 1';
    menu1SubItem.html = '';
    menu1SubItem.href = '';
    menu1SubItem.routerLink = '';
    menu1SubItem.routerLinkActiveClasses = '';
    menu1SubItem.fragment = '';
    menu1SubItem.id = 'Subitem 1-id';
    menu1SubItem.disabled = null;
    menu1SubItem.active = null;
    menu1SubItem.divider = null;
    menu1SubItem.target = '';

    menu2SubItem.text = 'Subitem 2';
    menu2SubItem.html = '';
    menu2SubItem.href = '';
    menu2SubItem.routerLink = '';
    menu2SubItem.routerLinkActiveClasses = '';
    menu2SubItem.fragment = '';
    menu2SubItem.id = 'Subitem 2-id';
    menu2SubItem.disabled = null;
    menu2SubItem.active = true;
    menu2SubItem.divider = null;
    menu2SubItem.target = '';

    menu1.sub.items.push(menu1SubItem);
    menu1.sub.items.push(menu2SubItem);
    
    this.item = new MenuVerticalModel();
    this.subItem = new MenuVerticalSubItemsModel();

    this.item.id = 'itemId-2-editable';
    this.item.text = 'Item2 - editable';
    this.item.html = '';
    this.item.classes = '';
    this.item.href = '';
    this.item.routerLink = '';
    this.item.routerLinkActiveClasses = '';
    this.item.fragment = '';
    this.item.target = '';
    this.item.expanded = false;
    this.item.disabled = false;
    this.item.divider = false;
    this.item.sub.id = '';
    this.item.sub.html = '';
    this.item.sub.classes = null;
    this.item.sub.items = [];

    this.subItem.text = 'Subitem 1 - editable';
    this.subItem.html = '';
    this.subItem.href = null;
    this.subItem.routerLink = null;
    this.subItem.routerLinkActiveClasses = null;
    this.subItem.fragment = null;
    this.subItem.id = 'Subitem 1-id';
    this.subItem.disabled = null;
    this.subItem.active = null;
    this.subItem.divider = null;
    this.subItem.target = '';

    this.item.sub.items.push(this.subItem);

    this.items = [];
    this.items.push(menu1);
    this.items.push(this.item);
  }

}
   


    

