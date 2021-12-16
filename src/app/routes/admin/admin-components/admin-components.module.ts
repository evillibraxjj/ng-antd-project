import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@shared/admin';

import { PageTableComponent } from './page-table.component';

@NgModule({
  imports: [AdminSharedModule],
  declarations: [PageTableComponent],
  exports: [PageTableComponent],
})
export class AdminComponentsModule {}
