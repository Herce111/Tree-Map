import { Component, OnInit } from '@angular/core';
import { ItemDescriptionData } from 'desy-angular';
import { ItemDescriptionModel } from '../../shared/models/item-description-model';

@Component({
  selector: 'app-demo-description-list',
  templateUrl: './demo-description-list.component.html'
})
export class DemoDescriptionListComponent implements OnInit {

  nameComponent = 'description-list';

  items: Array<ItemDescriptionData>;
  item: ItemDescriptionModel;
  classes: string;
  id: string;

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
    this.classes = 'inline-block p-base border border-neutral-base rounded';

    const itemTxt = new ItemDescriptionModel();
    itemTxt.term.text = 'term';
    itemTxt.definition.text = 'definition';
    itemTxt.definition.classes = 'text-lg';
    itemTxt.classes = 'mb-base';

    const itemHtml = new ItemDescriptionModel();
    itemHtml.term.html = 'Expedientes abiertos &darr;';
    itemHtml.definition.html = '<span class="font-bold text-4xl">45</span> <svg class="inline-block align-baseline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1.6rem" height="1.6rem"><path d="M140 20a20 20 0 00-20-20H20A20 20 0 000 20v100a20 20 0 0020 20h70a10 10 0 007.07-2.93l40-40A10 10 0 00140 90zM20 22.5a2.5 2.5 0 012.5-2.5h95a2.5 2.5 0 012.5 2.5v55a2.5 2.5 0 01-2.5 2.5H95a15 15 0 00-15 15v22.5a2.5 2.5 0 01-2.5 2.5h-55a2.5 2.5 0 01-2.5-2.5z"/></svg><a href="/" class="c-link block font-normal text-sm">Ver todos</a>';
    itemHtml.classes = 'mb-base';

    this.item = new ItemDescriptionModel();
    this.item.term.text = 'termino para editar';
    this.item.definition.text = 'definition para editar';
    this.item.classes = 'mb-base';

    this.items = [];
    this.items.push(itemTxt);
    this.items.push(itemHtml);
    this.items.push(this.item);
  }

}
