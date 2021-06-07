import { Component, OnInit } from '@angular/core';
import { MenuHorizontalItemData, MenuHorizontalItemEventData } from 'desy-angular';

@Component({
  selector: 'app-demo-menu-horizontal',
  templateUrl: './demo-menu-horizontal.component.html'
})
export class DemoMenuHorizontalComponent implements OnInit {

  nameComponent = 'Menu-horizontal';

  id: string;
  idPrefix: string;
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

  selectedItem: MenuHorizontalItemData;
  items: MenuHorizontalItemData[] = [
    {
      text: 'item1',
      id: 'item1',
      active: true
    },
    {
      text: 'item2',
      id: 'item2',
    },
    {
      text: 'item3',
      id: 'item3',
    }
  ];
  itemCustom: MenuHorizontalItemData = {};
  itemsFull: MenuHorizontalItemData[] = [
    {
      text: 'item1',
    },
    {
      text: 'item2',
    },
    this.itemCustom
  ];

  constructor() { }

  ngOnInit(): void {
    this.itemCustom.text = 'Ítem configurable';
  }

  handleClickEvent(event: MenuHorizontalItemEventData): void {
    this.selectedItem = event.item;
  }

}
