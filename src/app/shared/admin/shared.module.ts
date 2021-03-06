import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SHARED_ZORRO_MODULES } from './shared-zorro.ui';

import { ADMIN_DIRECTIVE } from './directives';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...SHARED_ZORRO_MODULES,
  ],
  declarations: [...ADMIN_DIRECTIVE],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...SHARED_ZORRO_MODULES,
    ...ADMIN_DIRECTIVE,
  ],
})
export class AdminSharedModule {}
