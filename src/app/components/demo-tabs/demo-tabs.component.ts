import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabsItemsData } from 'desy-angular';
import { ItemTabsModel } from '../../shared/models/item-tabs-model';

@Component({
  selector: 'app-demo-tabs',
  templateUrl: './demo-tabs.component.html'
})
export class DemoTabsComponent implements OnInit, AfterViewInit {

  nameComponent = 'tabs';

  @ViewChild('customTabSelector') customTabSelector: TemplateRef<any>;
  @ViewChild('customTabPanel') customTabPanel: TemplateRef<any>;

  id: string;
  idPrefix: string;
  classes: string;

  title: string;
  tablistAriaLabel: string;
  items: Array<TabsItemsData>;
  item: ItemTabsModel;

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

    this.tablistAriaLabel = 'Tab example';
    this.title = 'Implementación editable';

    this.item = new ItemTabsModel();

    this.item.id = 'tab-example-b';
    this.item.text = 'Ver original';
    this.item.html = '';
    this.item.disabled = false;
    this.item.panel.id = '';
    this.item.panel.text = 'Item.Panel.Text Tab1';
    this.item.panel.classes = null;

    this.items = [];
    this.items.push(this.item);
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      const customTab = new ItemTabsModel();
      customTab.id = 'tab-example-a';
      customTab.text = 'Cambios';
      customTab.html = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 140 140\' width=\'1em\' height=\'1em\' class=\'w-4 h-4 mr-xs\' aria-label=\'Archivo\' role=\'img\' focusable=\'false\'><path d=\'M89.355 12.518l26.46 26.46a2.917 2.917 0 01.852 2.06v84.379a2.917 2.917 0 01-2.917 2.916h-87.5a2.917 2.917 0 01-2.917-2.916V14.583a2.917 2.917 0 012.917-2.916h61.046a2.917 2.917 0 012.059.851zM90.918 0H23.333a11.667 11.667 0 00-11.666 11.667v116.666A11.667 11.667 0 0023.333 140h93.334a11.667 11.667 0 0011.666-11.667V37.415a5.833 5.833 0 00-1.709-4.124L95.042 1.709A5.833 5.833 0 0090.918 0z\' fill=\'currentColor\'/><path d=\'M93.333 64.167h-52.5a5.833 5.833 0 010-11.667h52.5a5.833 5.833 0 010 11.667zM93.333 87.5h-52.5a5.833 5.833 0 010-11.667h52.5a5.833 5.833 0 010 11.667zM67.083 110.833h-26.25a5.833 5.833 0 010-11.666h26.25a5.833 5.833 0 010 11.666z\' fill=\'currentColor\'/></svg> Cambios';
      customTab.disabled = false;
      customTab.panel.id = '';
      customTab.panel.text = 'Texto editable';
      customTab.panel.html = this.customTabSelector;
      customTab.panel.classes = null;
      this.items.push(customTab);

      this.item.panel.html = this.customTabPanel;
    });
  }
}
