import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from '@shared/admin/index';

import { SERVICE_PROVIDERS } from '@service/index';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.less'],
  animations: [routeAnimation],
  providers: [...SERVICE_PROVIDERS],
})
export class AdminLayoutComponent {
  constructor() {}

  animationRoute(outlet: RouterOutlet) {
    return outlet.activatedRoute.routeConfig?.path;
  }
}
