import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@shared/admin';

import { HorizontalMenuComponent } from './horizontal-menu.component';
import { UserDropdownTriggerComponent } from './user-dropdown-trigger-component';
import { UserLogoutModalComponent } from './user-logout-modal.component';
import { UserViewDdrawerComponent } from './user-view-drawer.component';

@NgModule({
  imports: [AdminSharedModule],
  declarations: [
    HorizontalMenuComponent,
    UserDropdownTriggerComponent,
    UserLogoutModalComponent,
    UserViewDdrawerComponent,
  ],
  exports: [HorizontalMenuComponent],
})
export class HorizontalMenuModule {}

export const HORIZONTAL_EXPORT_COMPONENTS = [HorizontalMenuComponent];
