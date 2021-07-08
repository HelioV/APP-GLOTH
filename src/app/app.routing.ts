import { LoginComponent } from '../app/login/login.component';
import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
export const AppRoutes: Routes = [

  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'Login',
        component: LoginComponent
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
