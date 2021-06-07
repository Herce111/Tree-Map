import { Component, OnInit } from '@angular/core';
import { BreadcrumbsData } from 'desy-angular';
import { ItemBreadcrumbsModel } from '../../shared/models/item-breadcrumbs-model';

@Component({
  selector: 'app-demo-breadcrumbs',
  templateUrl: './demo-breadcrumbs.component.html'
})
export class DemoBreadcrumbsComponent implements OnInit {

  nameComponent = 'breadcrumbs';

  items: Array<BreadcrumbsData>;
  item: ItemBreadcrumbsModel;

  classes: string;
  collapseOnMobile: boolean;
  hasBackButton: boolean;

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
    //this.classes = 'c-breadcrumbs';
  
    const itemCrumb = new ItemBreadcrumbsModel();
    itemCrumb.text = 'Home';
    itemCrumb.html = 'Home';
    itemCrumb.routerLink = '/';
    
    const itemCrumb2 = new ItemBreadcrumbsModel();
    itemCrumb2.text = 'Section';
    itemCrumb2.html = 'Section';
    //itemCrumb2.routerLink = '/section';
    
    const itemHtml = new ItemBreadcrumbsModel();
    itemHtml.text = 'Sub-section';
    itemHtml.html = 'Sub-section';
    itemHtml.routerLink = '/section/sub-section';
    
    this.item = new ItemBreadcrumbsModel();
    this.item.text = 'Sub Sub-section';
    this.item.html = 'Sub Sub-section';
    this.item.routerLink = '/collapsible'

    this.items = [];
    this.items.push(itemCrumb);
    this.items.push(itemCrumb2);
    this.items.push(itemHtml);
    this.items.push(this.item);
    

  }

}
