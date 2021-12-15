import { Component } from '@angular/core';
import { TestService } from '@service/test.service';

@Component({
  selector: 'app-manage-crises',
  templateUrl: './manage-crises.component.html',
  styleUrls: ['./manage-crises.component.less'],
})
export class ManageCrisesComponent {
  constructor(public testService: TestService) {}
  setStr() {
    this.testService.setStr(new Date().getTime().toString());
  }
}
