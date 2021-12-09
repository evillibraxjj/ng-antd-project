import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import {
  PassportRoutingModule,
  PASSPORT_COMPONENTS,
} from './passport-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PassportRoutingModule,

    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
  ],
  declarations: [...PASSPORT_COMPONENTS],
})
export class PassportModule {}
