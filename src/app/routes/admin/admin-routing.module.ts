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
        },
      },
      {
        path: 'crises',
        component: ManageCrisesComponent,
        data: {
          breadcrumb: 'Crises',
        },
      },
      {
        path: 'heroes',
        component: ManageHeroesComponent,
        data: {
          breadcrumb: 'Heroes',
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
  AdminLayoutComponent,
  ManageCrisesComponent,
  ManageHeroesComponent,
  AdminDashboardComponent,
];
