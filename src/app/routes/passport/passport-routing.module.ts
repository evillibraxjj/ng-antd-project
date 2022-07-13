import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const passportRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(passportRoutes)],
  exports: [RouterModule],
})
export class PassportRoutingModule {}

export const PASSPORT_COMPONENTS = [LoginComponent];
