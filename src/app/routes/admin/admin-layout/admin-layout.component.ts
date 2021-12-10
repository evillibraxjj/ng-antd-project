import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from '@shared/admin/index';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.less'],
  animations: [routeAnimation],
})
export class AdminLayoutComponent {
  animationRoute(outlet: RouterOutlet) {
    return outlet.activatedRoute.routeConfig?.path;
  }
}
