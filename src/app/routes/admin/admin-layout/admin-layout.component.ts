import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.less'],
  animations: [slideInAnimation],
})
export class AdminLayoutComponent {
  animationRoute(outlet: RouterOutlet) {
    return outlet.activatedRoute.routeConfig?.path;
  }
}
