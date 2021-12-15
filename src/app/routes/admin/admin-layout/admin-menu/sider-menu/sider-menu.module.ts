import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@shared/admin';

import { SiderMenuComponent } from './sider-menu.component';
import { MenuRecursiveComponent } from './menu-recursive-component';

@NgModule({
  imports: [AdminSharedModule],
  declarations: [SiderMenuComponent, MenuRecursiveComponent],
  exports: [SiderMenuComponent],
})
export class SiderMenuModule {}

export const SIDER_EXPORT_COMPONENTS = [SiderMenuComponent];
