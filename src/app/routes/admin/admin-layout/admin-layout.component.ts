import { Component } from '@angular/core';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.less'],
  animations: [slideInAnimation],
})
export class AdminLayoutComponent {}
