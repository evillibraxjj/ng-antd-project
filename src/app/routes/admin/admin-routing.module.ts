import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from './admin.guard';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        data: {
          breadcrumb: 'Dashboard',
          type: ['User', 'Admin'],
        },
      },
      {
        path: 'crises',
        component: ManageCrisesComponent,
        data: {
          breadcrumb: 'Crises',
          type: ['User', 'Admin'],
        },
      },
      {
        path: 'heroes',
        component: ManageHeroesComponent,
        data: {
          breadcrumb: 'Heroes',
          type: ['User', 'Admin'],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

export const ADMIN_COMPONENTS = [
  ManageCrisesComponent,
  ManageHeroesComponent,
  AdminDashboardComponent,
];
