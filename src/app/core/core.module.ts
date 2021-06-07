import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReplaceTagDirective } from '../directives/replace-tag.directive';
import { TreeViewErrorHandlerService } from './services';


@NgModule({
  declarations: [
    ReplaceTagDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    ReplaceTagDirective,
  ],
  providers: [
    { provide: ErrorHandler, useExisting: TreeViewErrorHandlerService }
  ]
})
export class CoreModule { }
