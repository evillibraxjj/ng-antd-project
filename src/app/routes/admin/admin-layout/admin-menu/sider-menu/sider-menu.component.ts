import { Component } from '@angular/core';

@Component({
  selector: 'app-sider-menu',
  template: `
    <div class="logo"></div>
    <app-menu-recursive nzMode="inline" [menus]="menus"></app-menu-recursive>
  `,
  styles: [
    `
      .logo {
        height: 32px;
        background: rgba(0, 0, 0, 0.2);
        margin: 16px;
      }
    `,
  ],
})
export class SiderMenuComponent {
  menus = [
    {
      level: 1,
      title: '邮件',
      icon: 'mail',
      open: true,
      children: [
        {
          level: 2,
          title: '邮件管理',
          icon: 'bars',
          open: false,
          children: [
            {
              level: 3,
              title: '邮件列表',
              icon: 'mail',
              router: ['heroes'],
            },
          ],
        },
        {
          level: 2,
          title: '未读邮件',
          icon: 'user',
          router: ['crises'],
        },
      ],
    },
  ];
}
