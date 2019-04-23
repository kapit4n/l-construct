import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbListModule } from '@nebular/theme';
import { NbInputModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectViewComponent, ProjectAddComponent, ProjectEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProjectRoutingModule,
    NbThemeModule,
    NbLayoutModule,
    NbListModule,
    NbAuthModule,
    NbCardModule,
    NbInputModule
  ]
})
export class ProjectModule { }
