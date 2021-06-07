import { Component } from '@angular/core';
import {AccordionItemModel} from "../../shared/models/accordion-item-model";
import {AccordionHeaderModel} from "../../shared/models/accordion-header-model";

@Component({
  selector: 'app-demo-accordion',
  templateUrl: './demo-accordion.component.html'
})
export class DemoAccordionComponent {

  nameComponent: string = 'Accordion';

  defaultList: AccordionItemModel[] = [];
  allowMultipleList: AccordionItemModel[] = [];
  allowToggleList: AccordionItemModel[] = [];
  headingList: AccordionItemModel[] = [];
  headingControlsList: AccordionItemModel[] = [];
  customList: AccordionItemModel[] = [];

  heading: AccordionHeaderModel;
  customHeading: AccordionHeaderModel;

  customIdPrefix: string;
  customAllowToggle: boolean;
  customAllowMultiple: boolean;
  customShowControl: boolean;
  customClasses: string;
  id: string;

  customItem: AccordionItemModel;

  defaultHtml: string = '<div class=" w-48 p-2 "><div class=" border-4 border-dashed border-gray-200 rounded-lg h-40 "></div></div>';

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
    for (let i = 0; i < 3; i++) {
      let item: AccordionItemModel = new AccordionItemModel();
      item.headerText = 'Accordion Item ' + (i+1);
      item.html = this.defaultHtml;
      this.defaultList.push(item);
    }
    for (let i = 0; i < 3; i++) {
      let item: AccordionItemModel = new AccordionItemModel();
      item.headerText = 'Accordion Item ' + (i+1);
      item.html = this.defaultHtml;
      this.allowMultipleList.push(item);
    }
    for (let i = 0; i < 3; i++) {
      let item: AccordionItemModel = new AccordionItemModel();
      item.headerText = 'Accordion Item ' + (i+1);
      item.html = this.defaultHtml;
      this.allowToggleList.push(item);
    }
    for (let i = 0; i < 3; i++) {
      let item: AccordionItemModel = new AccordionItemModel();
      item.headerText = 'Accordion Item ' + (i+1);
      item.html = this.defaultHtml;
      this.headingList.push(item);
    }
    for (let i = 0; i < 3; i++) {
      let item: AccordionItemModel = new AccordionItemModel();
      item.headerText = 'Accordion Item ' + (i+1);
      item.html = this.defaultHtml;
      this.headingControlsList.push(item);
    }

    this.heading = new AccordionHeaderModel();
    this.heading.text = 'Accordion example';

    this.customItem = new AccordionItemModel();
    this.customItem.headerText = 'Parametrizado';
    this.customItem.html = this.defaultHtml;
    this.customList.push(this.customItem);

    this.customHeading = new AccordionHeaderModel();
    this.customHeading.text = 'Parametrizado';
  }

}
