import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '@env';

import { PageNotFoundComponent } from '@/page-not-found/page-not-found.component';

import { PassportModule } from './passport/passport.module';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then(({ AdminModule }) => AdminModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    PassportModule,
    RouterModule.forRoot(appRoutes, { useHash: environment.production }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const APP_COMPONENTS = [PageNotFoundComponent];
