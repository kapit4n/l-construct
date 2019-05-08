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
  },
  {
    path: 'materials',
    loadChildren: './materials/materials.module#MaterialsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'contractors',
    loadChildren: './contractors/contractors.module#ContractorsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'contracts',
    loadChildren: './contracts/contracts.module#ContractsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'equipments',
    loadChildren: './equipments/equipments.module#EquipmentsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'estimations',
    loadChildren: './estimations/estimations.module#EstimationsModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
