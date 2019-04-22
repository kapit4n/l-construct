import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbListModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [ProjectListComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NbThemeModule,
    NbLayoutModule,
    NbListModule,
    NbAuthModule
  ]
})
export class ProjectModule { }
