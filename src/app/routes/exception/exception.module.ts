import { NgModule } from '@angular/core';
import { ExceptionSharedModule } from '@shared/exception';

import {
  ExceptionRoutingModule,
  EXCEPTION_COMPONENTS,
} from './exception-routing.module';

@NgModule({
  imports: [ExceptionSharedModule, ExceptionRoutingModule],
  declarations: [...EXCEPTION_COMPONENTS],
})
export class ExceptionModule {}
