import { Component } from '@angular/core';
import { TestService } from '@service/test.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.less'],
})
export class AdminDashboardComponent {
  birthday: Date = new Date();

  constructor(public testService: TestService) {}

  setStr() {
    this.testService.setStr(new Date().getTime().toString());
  }
}
