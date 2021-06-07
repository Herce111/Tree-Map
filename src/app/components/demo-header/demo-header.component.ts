import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import {
  HeaderDropdownData,
  HeaderSubnavData,
  HeaderOffcanvasData,
  HeaderNavigationData,
  HeaderNavigationItemData,
  NavItemData,
  ItemCheckboxData
} from 'desy-angular';

@Component({
  selector: 'app-demo-header',
  templateUrl: './demo-header.component.html',
  styles: [
  ]
})
export class DemoHeaderComponent implements AfterViewInit {

  @ViewChild('offsetMenu') offsetMenu: TemplateRef<any>;

  nameComponent = 'Header';

  // Header
  id: string;
  classes: string;
  containerClasses: string;
  homepageUrl: string;
  homepageRouterLink: string;
  homepageFragment: string;
  expandedLogo: boolean;

  subnavItemData: NavItemData = {
    active: true,
    text: 'Item Subnav personalizable',
    href: 'http://google.es',
  };
  subnavData: HeaderSubnavData = {
    text: 'subNav',
    items: [
      {
        text: 'Item Subnav 1',
        href: 'http://google.es'
      },
      this.subnavItemData
    ]
  };
  subnavDataWithoutItems: HeaderSubnavData = {
    text: 'Desy-angular'
  };

  navigationItemData: HeaderNavigationItemData = {
    text: 'Item Nav personalizable'
  };
  navigationData: HeaderNavigationData = {
    items: [
      {
        text: 'Item Nav 1'
      },
      this.navigationItemData
    ]
  };
  dropdownItemData: NavItemData = {
    active: true,
    text: 'Item Subnav personalizable',
    href: 'http://google.es',
  };
  dropdownData: HeaderDropdownData = {
    text: 'Dropdown',
    items: [
      {
        text: 'Item Dropdown 1',
        href: 'http://google.es'
      },
      this.dropdownItemData
    ]
  };
  offsetcanvasData: HeaderOffcanvasData = {
    text: 'Offsetcanvas',
    textClose: 'Cerrar',
    labelledId: 'caller-id',
    contentHtml: null
  };

  // Accesibilidad
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

  // Gestión de elementos
  headerElements: ItemCheckboxData[] = [
    {
      value: 'subnav',
      text: 'Subnav',
      conditional: true
    },
    {
      value: 'navigation',
      text: 'Navigation',
      hintText: 'Sólo es visible en pantallas grandes',
      conditional: true
    },
    {
      value: 'dropdown',
      text: 'DropDown',
      hintText: 'Sólo es visible en pantallas grandes',
      conditional: true
    },
    {
      value: 'offcanvas',
      text: 'Offcanvas',
      hintText: 'Sólo es visible en pantallas pequeñas',
      conditional: true
    }
  ];
  headerVisibleElems = [];
  headerSubnavItems = true;

  isHeaderElemVisible(elem: string): boolean {
    return this.headerVisibleElems.findIndex(e => e === elem) >= 0;
  }

  ngAfterViewInit(): void {
    this.offsetcanvasData.contentHtml = this.offsetMenu;
  }
}

