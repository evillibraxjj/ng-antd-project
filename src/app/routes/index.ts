import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '@env';

import { PassportModule } from './passport/passport.module';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then(({ AdminModule }) => AdminModule),
  },
  {
    path: 'exception',
    loadChildren: () =>
      import('./exception/exception.module').then((m) => m.ExceptionModule),
  },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    PassportModule,
    RouterModule.forRoot(appRoutes, { useHash: environment.production }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
