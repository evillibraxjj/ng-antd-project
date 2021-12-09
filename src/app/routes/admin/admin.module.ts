import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared';

import { AdminRoutingModule, ADMIN_COMPONENTS } from './admin-routing.module';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,

    AdminRoutingModule,
    NzNotificationModule,
  ],
  declarations: [...ADMIN_COMPONENTS],
})
export class AdminModule {}
