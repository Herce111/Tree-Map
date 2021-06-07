import { NgModule } from '@angular/core';
import { CoreModule } from '../core';
import { TREE } from './components';
import { CartRoutingModule } from './tree-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DesyButtonsModule, DesyFormsModule, DesyNavModule} from 'desy-angular';

@NgModule({
  declarations: [
    ...TREE,
  ],
  imports: [
    CoreModule,
    CartRoutingModule,
    FormsModule,
    SharedModule,
    DesyButtonsModule,
    DesyFormsModule,
    ReactiveFormsModule,
    DesyNavModule
  ],
})
export class TreeModule { }
