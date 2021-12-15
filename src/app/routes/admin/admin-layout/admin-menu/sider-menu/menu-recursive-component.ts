import { Component, Input } from '@angular/core';
import { NzMenuModeType, NzMenuThemeType } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-menu-recursive',
  template: `
    <ul nz-menu [nzMode]="nzMode" [nzTheme]="nzTheme">
      <ng-container
        *ngTemplateOutlet="menuTpl; context: { $implicit: menus }"
      ></ng-container>
      <ng-template #menuTpl let-menus>
        <ng-container *ngFor="let menu of menus">
          <li
            *ngIf="!menu.children"
            [nzPaddingLeft]="menu.level * 24"
            nz-menu-item
            nzMatchRouter
          >
            <a [routerLink]="menu.router">
              <i nz-icon [nzType]="menu.icon" *ngIf="menu.icon"></i>
              <span>{{ menu.title }}</span>
            </a>
          </li>
          <li
            *ngIf="menu.children"
            [nzPaddingLeft]="menu.level * 24"
            [nzOpen]="menu.open"
            [nzTitle]="menu.title"
            [nzIcon]="menu.icon"
            nz-submenu
          >
            <ul>
              <ng-container
                *ngTemplateOutlet="
                  menuTpl;
                  context: { $implicit: menu.children }
                "
              ></ng-container>
            </ul>
          </li>
        </ng-container>
      </ng-template>
    </ul>
  `,
})
export class MenuRecursiveComponent {
  @Input() nzMode: NzMenuModeType = 'vertical';
  @Input() nzTheme: NzMenuThemeType = 'light';

  @Input() menus: Array<any> = [];
}
