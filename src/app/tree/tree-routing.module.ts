import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent, EditItemComponent, TreeViewComponent } from './components';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    component: TreeViewComponent,
  },
  {
    path: 'addItem', 
    component: CreateItemComponent,
  },
  {
    path: 'editItem/:id', 
    component: EditItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
