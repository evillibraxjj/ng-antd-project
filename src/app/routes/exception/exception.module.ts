import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ExceptionRoutingModule,
  EXCEPTION_COMPONENTS,
} from './exception-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ExceptionRoutingModule],
  declarations: [...EXCEPTION_COMPONENTS],
})
export class ExceptionModule {}
