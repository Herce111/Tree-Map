import { Component, OnInit } from '@angular/core';
import { HeaderDropdownData, MetaData } from 'desy-angular';
import { MetaDataModel } from './shared/models/footer-model.component';
import { DESY_COMPONENTS } from './shared/utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['../styles.css']
})
export class AppComponent implements OnInit {

  componentList = [];
  meta: MetaData = new MetaDataModel();


  dropdownData: HeaderDropdownData = {
    text: 'Componentes',
    items: this.componentList
  };

  ngOnInit(): void {
    DESY_COMPONENTS.forEach(component => this.componentList.push({
      text: component.title,
      routerLink: `/${component.alias}`
    }));
    this.componentList.sort((a, b) => a.text > b.text ? 1 : a.text === b.text ? 0 : -1);
    this.meta.html = 'Creado por <a href="https://sda.aragon.es/" class="c-link c-link--neutral">SDA Servicios Digitales de Aragón</a>';
  }

}
