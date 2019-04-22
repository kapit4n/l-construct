import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NbAuthComponent, NbLogoutComponent } from '@nebular/auth';  // <---
import { NgxLoginComponent } from './login/login.component'; // <---

const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,  // <---
    children: [
      {
        path: 'login',
        component: NgxLoginComponent, // <---
      },
      {
        path: 'logout',
        component: NbLogoutComponent
      }
    ],
  },
  {
    path: 'projects',
    loadChildren: './project/project.module#ProjectModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
