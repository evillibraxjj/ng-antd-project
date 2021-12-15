import { NgModule } from '@angular/core';

import { AdminSharedModule } from '@shared/admin';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { AdminRoutingModule, ADMIN_COMPONENTS } from './admin-routing.module';

@NgModule({
  imports: [AdminSharedModule, AdminLayoutModule, AdminRoutingModule],
  declarations: [...ADMIN_COMPONENTS],
})
export class AdminModule {}
