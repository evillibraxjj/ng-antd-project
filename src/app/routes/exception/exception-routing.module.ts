import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const passportRoutes: Routes = [
  { path: '404', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(passportRoutes)],
  exports: [RouterModule],
})
export class ExceptionRoutingModule {}

export const EXCEPTION_COMPONENTS = [PageNotFoundComponent];
