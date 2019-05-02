import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractorListComponent } from './contractor-list/contractor-list.component';
import { ContractorViewComponent } from './contractor-view/contractor-view.component';
import { ContractorAddComponent } from './contractor-add/contractor-add.component';
import { ContractorEditComponent } from './contractor-edit/contractor-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ContractorListComponent
  },
  {
    path: 'view/:id',
    component: ContractorViewComponent
  },
  {
    path: 'edit/:id',
    component: ContractorEditComponent
  },
  {
    path: 'add',
    component: ContractorAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorsRoutingModule { }
