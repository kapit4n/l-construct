import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialViewComponent } from './material-view/material-view.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialListComponent
  },
  {
    path: 'view/:id',
    component: MaterialViewComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule { }
