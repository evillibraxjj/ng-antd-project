import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageResultComponent } from './page-result/page-result.component';

const passportRoutes: Routes = [
  {
    path: '403',
    component: PageResultComponent,
    data: {
      status: '403',
      title: '没有访问权限',
      subTitle: '对不起，您没有访问权限',
    },
  },
  {
    path: '404',
    component: PageResultComponent,
    data: {
      status: '404',
      title: '找不到页面',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(passportRoutes)],
  exports: [RouterModule],
})
export class ExceptionRoutingModule {}

export const EXCEPTION_COMPONENTS = [PageResultComponent];
