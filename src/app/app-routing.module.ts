import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { MenuComponentsComponent } from './components/menu-components/menu-components.component';

// desy-buttons
import { DemoButtonComponent } from './components/demo-button/demo-button.component';
import { DemoButtonLoaderComponent } from './components/demo-button-loader/demo-button-loader.component';
import { DemoDropdownComponent } from './components/demo-dropdown/demo-dropdown.component';
import { DemoPillComponent } from './components/demo-pill/demo-pill.component';
//  desy-forms
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
import { DemoMenuVerticalComponent } from './components/demo-menu-vertical/demo-menu-vertical.component';
import { DemoSkipLinkComponent } from './components/demo-skip-link/demo-skip-link.component';
import { DemoFooterComponent } from './components/demo-footer/demo-footer.component';
import { DemoHeaderComponent } from './components/demo-header/demo-header.component';
import { DemoNotificationComponent } from './components/demo-notification/demo-notification.component';


const routes: Routes = [
  { path: 'componentes', component: MenuComponentsComponent },

  // desy-buttons
  { path: 'button', component: DemoButtonComponent },
  { path: 'button-loader', component: DemoButtonLoaderComponent },
  { path: 'pill', component: DemoPillComponent },
  { path: 'dropdown', component: DemoDropdownComponent },

  //  desy-forms
  { path: 'hint', component: DemoHintComponent },
  { path: 'label', component: DemoLabelComponent },
  { path: 'error-message', component: DemoErrorMessageComponent },
  { path: 'fieldset', component: DemoFieldsetComponent },
  { path: 'textarea', component: DemoTextareaComponent },
  { path: 'character-count', component: DemoCharacterCountComponent },
  { path: 'input', component: DemoInputComponent },
  { path: 'select', component: DemoSelectComponent },
  { path: 'file-upload', component: DemoFileUploadComponent },
  { path: 'input-group', component: DemoInputGroupComponent },
  { path: 'radios', component: DemoRadiosComponent },
  { path: 'checkboxes', component: DemoCheckboxesComponent },
  { path: 'date-input', component: DemoDateInputComponent },
  { path: 'search-bar', component: DemoSearchBarComponent },

  // desy-modals
  { path: 'modal', component: DemoModalComponent },
  { path: 'dialog', component: DemoDialogComponent },

   // desy-views
  { path: 'alert', component: DemoAlertComponent },
  { path: 'accordion', component: DemoAccordionComponent },
  { path: 'spinner', component: DemoSpinnerComponent },
  { path: 'details', component: DemoDetailsComponent },
  { path: 'description-list', component: DemoDescriptionListComponent },
  { path: 'collapsible', component: DemoCollapsibleComponent },
  { path: 'item', component: DemoItemComponent },
  { path: 'media-object', component: DemoMediaObjectComponent },
  { path: 'pagination', component: DemoPaginationComponent },
  { path: 'status', component: DemoStatusComponent },
  { path: 'status-item', component: DemoStatusItemComponent },
  { path: 'tabs', component: DemoTabsComponent },
  // desy-tables
  { path: 'table', component: DemoTableComponent },
  { path: 'table-advanced', component: DemoTableAdvancedComponent },

  // desy-nav
  { path: 'breadcrumbs', component: DemoBreadcrumbsComponent },
  { path: 'error-summary', component: DemoErrorSummaryComponent },
  { path: 'footer', component: DemoFooterComponent },
  { path: 'header', component: DemoHeaderComponent },
  { path: 'menu-horizontal', component: DemoMenuHorizontalComponent },
  { path: 'nav', component: DemoNavComponent },
  { path: 'menu-vertical', component: DemoMenuVerticalComponent },
  { path: 'skip-link', component: DemoSkipLinkComponent },
  { path: 'notification', component: DemoNotificationComponent },

  {
    path: 'treeView',
    loadChildren: () => import('./tree/tree.module').then(m => m.TreeModule),
  },

  { path: '', redirectTo: 'componentes', pathMatch: 'full' },
  { path: '**', redirectTo: 'componentes', pathMatch: 'full' },



];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  relativeLinkResolution: 'legacy'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
