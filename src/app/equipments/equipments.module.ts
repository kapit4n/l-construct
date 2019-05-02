import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbListModule } from '@nebular/theme';
import { NbInputModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';

import { EquipmentsRoutingModule } from './equipments-routing.module';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentViewComponent } from './equipment-view/equipment-view.component';

@NgModule({
  declarations: [EquipmentListComponent, EquipmentViewComponent],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    FormsModule,
    NbThemeModule,
    NbLayoutModule,
    NbListModule,
    NbAuthModule,
    NbCardModule,
    NbInputModule
  ]
})
export class EquipmentsModule { }
