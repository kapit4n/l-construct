import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbListModule } from '@nebular/theme';
import { NbInputModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import { NbButtonModule } from '@nebular/theme';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentListComponent } from './component-list/component-list.component';

@NgModule({
  declarations: [ComponentListComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    NbThemeModule,
    NbLayoutModule,
    NbListModule,
    NbAuthModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule
  ]
})
export class ComponentsModule { }
