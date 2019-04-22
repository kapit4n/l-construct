import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NbAuthComponent, NbLogoutComponent, NbLoginComponent } from '@nebular/auth';  // <---
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,  // <---
    children: [
      {
        path: 'login',
        component: NbLoginComponent, // <---
      },
      {
        path: 'logout',
        component: NbLogoutComponent
      }
    ],
  },
  {
    path: 'projects',
    loadChildren: './project/project.module#ProjectModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
