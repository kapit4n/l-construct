import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { MaterialAddComponent } from './material-add/material-add.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialListComponent
  },
  {
    path: 'edit/:id',
    component: MaterialEditComponent
  },
  {
    path: 'view/:id',
    component: MaterialViewComponent
  },
  {
    path: 'add',
    component: MaterialAddComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule { }
