import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentViewComponent } from './equipment-view/equipment-view.component';

const routes: Routes = [
  {
    path: '',
    component: EquipmentListComponent
  },
  {
    path: 'view/:id',
    component: EquipmentViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule { }
