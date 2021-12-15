import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@shared/admin';

import { AdminLayoutComponent } from './admin-layout.component';
import { AdminMenuModule } from './admin-menu/admin-menu.module';

@NgModule({
  imports: [AdminSharedModule, AdminMenuModule],
  declarations: [AdminLayoutComponent],
})
export class AdminLayoutModule {}
