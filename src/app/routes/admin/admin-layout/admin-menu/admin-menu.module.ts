import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@shared/admin';

import {
  HorizontalMenuModule,
  HORIZONTAL_EXPORT_COMPONENTS,
} from './horizontal-menu/horizontal-menu.module';
import {
  SiderMenuModule,
  SIDER_EXPORT_COMPONENTS,
} from './sider-menu/sider-menu.module';

@NgModule({
  imports: [AdminSharedModule, HorizontalMenuModule, SiderMenuModule],
  declarations: [],
  exports: [...HORIZONTAL_EXPORT_COMPONENTS, ...SIDER_EXPORT_COMPONENTS],
})
export class AdminMenuModule {}
