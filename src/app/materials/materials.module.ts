import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbListModule } from '@nebular/theme';
import { NbInputModule } from '@nebular/theme';
import { NbBadgeModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import { NbButtonModule } from '@nebular/theme';

import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialAddComponent } from './material-add/material-add.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';

@NgModule({
  declarations: [MaterialListComponent, MaterialAddComponent, MaterialViewComponent, MaterialEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialsRoutingModule,
    NbThemeModule,
    NbLayoutModule,
    NbListModule,
    NbButtonModule,
    NbAuthModule,
    NbCardModule,
    NbInputModule,
    NbBadgeModule
  ]
})
export class MaterialsModule { }
