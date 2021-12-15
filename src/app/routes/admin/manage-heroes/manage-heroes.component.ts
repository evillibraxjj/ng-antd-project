import { Component } from '@angular/core';
import { TestService } from '@/service/test.service';

@Component({
  selector: 'app-manage-hereos',
  templateUrl: './manage-heroes.component.html',
  styleUrls: ['./manage-heroes.component.less'],
})
export class ManageHeroesComponent {
  constructor(public testService: TestService) {}
}
