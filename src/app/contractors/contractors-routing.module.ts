import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractorListComponent } from './contractor-list/contractor-list.component';
import { ContractorViewComponent } from './contractor-view/contractor-view.component';

const routes: Routes = [
  {
    path: '',
    component: ContractorListComponent
  },
  {
    path: 'view/:id',
    component: ContractorViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorsRoutingModule { }
