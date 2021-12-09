import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from '@env';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

if (environment.production) enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.Emulated,
    preserveWhitespaces: false,
  })
  .then((res) => {
    const win = window as NzSafeAny;
    win && win.appBootstrap && win.appBootstrap();
    return res;
  })
  .catch((err) => console.error(err));
