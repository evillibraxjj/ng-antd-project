import { NgModule } from '@angular/core';

import { PassportSharedModule } from '@shared/passport';

import {
  PassportRoutingModule,
  PASSPORT_COMPONENTS,
} from './passport-routing.module';

@NgModule({
  imports: [PassportSharedModule, PassportRoutingModule],
  declarations: [...PASSPORT_COMPONENTS],
})
export class PassportModule {}
