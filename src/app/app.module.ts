import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// app module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// modules
import { DesyAngularModule, DialogService } from 'desy-angular';
import { SharedModule } from './shared/shared.module';

// componentes
import { MenuComponentsComponent } from './components/menu-components/menu-components.component';
// desy-buttons
import { DemoButtonComponent } from './components/demo-button/demo-button.component';
import { DemoButtonLoaderComponent } from './components/demo-button-loader/demo-button-loader.component';
import { DemoPillComponent } from './components/demo-pill/demo-pill.component';
import { DemoDropdownComponent } from './components/demo-dropdown/demo-dropdown.component';
// desy-forms
import { DemoHintComponent } from './components/demo-hint/demo-hint.component';
import { DemoLabelComponent } from './components/demo-label/demo-label.component';
import { DemoErrorMessageComponent } from './components/demo-error-message/demo-error-message.component';
import { DemoFieldsetComponent } from './components/demo-fieldset/demo-fieldset.component';
import { DemoTextareaComponent } from './components/demo-textarea/demo-textarea.component';
import { DemoCharacterCountComponent } from './components/demo-character-count/demo-character-count.component';
import { DemoInputComponent } from './components/demo-input/demo-input.component';
import { DemoSelectComponent } from './components/demo-select/demo-select.component';
import { DemoFileUploadComponent } from './components/demo-file-upload/demo-file-upload.component';
import { DemoInputGroupComponent } from './components/demo-input-group/demo-input-group.component';
import { DemoRadiosComponent } from './components/demo-radios/demo-radios.component';
import { DemoCheckboxesComponent } from './components/demo-checkboxes/demo-checkboxes.component';
import { DemoDateInputComponent } from './components/demo-date-input/demo-date-input.component';
import { DemoSearchBarComponent } from './components/demo-search-bar/demo-search-bar.component';
// desy-modals
import { DemoModalComponent } from './components/demo-modal/demo-modal.component';
import { DemoDialogComponent } from './components/demo-dialog/demo-dialog.component';
// desy-views
import { DemoAlertComponent } from './components/demo-alert/demo-alert.component';
import { DemoAccordionComponent } from './components/demo-accordion/demo-accordion.component';
import { DemoSpinnerComponent } from './components/demo-spinner/demo-spinner.component';
import { DemoDetailsComponent } from './components/demo-details/demo-details.component';
import { DemoDescriptionListComponent } from './components/demo-description-list/demo-description-list.component';
import { DemoCollapsibleComponent } from './components/demo-collapsible/demo-collapsible.component';
import { DemoItemComponent } from './components/demo-item/demo-item.component';
import { DemoMediaObjectComponent } from './components/demo-media-object/demo-media-object.component';
import { DemoPaginationComponent } from './components/demo-pagination/demo-pagination.component';
import { DemoStatusComponent } from './components/demo-status/demo-status.component';
import { DemoStatusItemComponent } from './components/demo-status-item/demo-status-item.component';
import { DemoTabsComponent } from './components/demo-tabs/demo-tabs.component';
// desy-tables
import { DemoTableComponent } from './components/demo-table/demo-table.component';
import { DemoTableAdvancedComponent } from './components/demo-table-advanced/demo-table-advanced.component';
// desy-nav
import { DemoBreadcrumbsComponent } from './components/demo-breadcrumbs/demo-breadcrumbs.component';
import { DemoErrorSummaryComponent } from './components/demo-error-summary/demo-error-summary.component';
import { DemoMenuHorizontalComponent } from './components/demo-menu-horizontal/demo-menu-horizontal.component';
import { DemoNavComponent } from './components/demo-nav/demo-nav.component';
import { DemoSkipLinkComponent } from './components/demo-skip-link/demo-skip-link.component';
import { DemoHeaderComponent } from './components/demo-header/demo-header.component';
import { DemoMenuVerticalComponent } from './components/demo-menu-vertical/demo-menu-vertical.component';
import { DemoNotificationComponent } from './components/demo-notification/demo-notification.component';
import { DemoFooterComponent } from './components/demo-footer/demo-footer.component';
import { CoreModule } from './core';
import { TreeModule } from './tree/tree.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponentsComponent,
    // desy-buttons
    DemoButtonComponent,
    DemoButtonLoaderComponent,
    DemoPillComponent,
    DemoDropdownComponent,
    // desy-forms
    DemoHintComponent,
    DemoLabelComponent,
    DemoErrorMessageComponent,
    DemoFieldsetComponent,
    DemoTextareaComponent,
    DemoCharacterCountComponent,
    DemoInputComponent,
    DemoSelectComponent,
    DemoFileUploadComponent,
    DemoInputGroupComponent,
    DemoRadiosComponent,
    DemoCheckboxesComponent,
    DemoDateInputComponent,
    DemoSearchBarComponent,

    // desy-modals
    DemoModalComponent,
    DemoDialogComponent,

    // desy-views
    DemoAccordionComponent,
    DemoAlertComponent,
    DemoSpinnerComponent,
    DemoDetailsComponent,
    DemoDescriptionListComponent,
    DemoCollapsibleComponent,
    DemoItemComponent,
    DemoMediaObjectComponent,
    DemoPaginationComponent,
    DemoStatusComponent,
    DemoStatusItemComponent,
    DemoTabsComponent,

    // desy-tables
    DemoTableComponent,
    DemoTableAdvancedComponent,

    // desy-nav
    DemoBreadcrumbsComponent,
    DemoErrorSummaryComponent,
    DemoMenuHorizontalComponent,
    DemoNavComponent,
    DemoMenuVerticalComponent,
    DemoSkipLinkComponent,
    DemoHeaderComponent,
    DemoNotificationComponent,
    DemoFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DesyAngularModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    DialogService
  ]
})
export class AppModule { }
