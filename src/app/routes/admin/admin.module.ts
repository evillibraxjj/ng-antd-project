import { NgModule } from '@angular/core';

import { AdminSharedModule } from '@shared/admin';

import { AdminRoutingModule, ADMIN_COMPONENTS } from './admin-routing.module';

@NgModule({
  imports: [AdminSharedModule, AdminRoutingModule],
  declarations: [...ADMIN_COMPONENTS],
})
export class AdminModule {}
