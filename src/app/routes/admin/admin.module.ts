import { NgModule } from '@angular/core';

import { AdminSharedModule } from '@shared/admin';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { AdminRoutingModule, ROUTIN_COMPONENTS } from './admin-routing.module';

import { AdminComponentsModule } from './admin-components/admin-components.module';

@NgModule({
  imports: [
    AdminSharedModule,
    AdminComponentsModule,
    AdminLayoutModule,
    AdminRoutingModule,
  ],
  declarations: [...ROUTIN_COMPONENTS],
})
export class AdminModule {}
