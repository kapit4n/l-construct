import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbListModule } from '@nebular/theme';
import { NbInputModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';

import { ContractorsRoutingModule } from './contractors-routing.module';
import { ContractorListComponent } from './contractor-list/contractor-list.component';

@NgModule({
  declarations: [ContractorListComponent],
  imports: [
    CommonModule,
    ContractorsRoutingModule,
    NbThemeModule,
    NbLayoutModule,
    NbListModule,
    NbAuthModule,
    NbCardModule,
    NbInputModule
  ]
})
export class ContractorsModule { }
