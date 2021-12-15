import { Component } from '@angular/core';
import { AuthService } from '@service/auth.service';

@Component({
  selector: 'app-user-dropdown-trigger-component',
  template: `
    <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="userDropdownTrigger">
      {{ authService.userInfo?.name }}
      <i nz-icon nzType="down"></i>
    </a>
    <nz-dropdown-menu #userDropdownTrigger="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item>
          <app-user-view-drawer></app-user-view-drawer>
        </li>
        <li nz-menu-divider></li>
        <li nz-menu-item>
          <app-user-logout-modal></app-user-logout-modal>
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
})
export class UserDropdownTriggerComponent {
  constructor(public authService: AuthService) {}
}
