import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-menu',
  template: `
    <div nzFlex="1" nz-col>
      <ul nzMode="horizontal" nzTheme="dark" nz-menu>
        <ng-container *ngFor="let menu of menus">
          <li [nzPaddingLeft]="menu.level * 24" nz-menu-item nzMatchRouter>
            <a [routerLink]="menu.router">
              <i nz-icon [nzType]="menu.icon" *ngIf="menu.icon"></i>
              <span>{{ menu.title }}</span>
            </a>
          </li>
        </ng-container>
      </ul>
    </div>
    <app-user-dropdown-trigger-component></app-user-dropdown-trigger-component>
  `,
})
export class HorizontalMenuComponent {
  menus = [
    {
      level: 1,
      title: '邮件',
      icon: 'mail',
      router: ['/'],
    },
    {
      level: 1,
      title: '用户',
      icon: 'user',
      router: ['/', 'user'],
    },
  ];
}
