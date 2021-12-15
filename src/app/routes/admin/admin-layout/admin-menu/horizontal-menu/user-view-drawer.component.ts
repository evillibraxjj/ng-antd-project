import { Component } from '@angular/core';

@Component({
  selector: 'app-user-view-drawer',
  template: `
    <a nzType="link" (click)="showDrawer()" nz-button>个人中心</a>
    <nz-drawer
      [nzVisible]="visible"
      nzWidth="100vw"
      nzPlacement="right"
      nzTitle="个人中心"
      (nzOnClose)="closeDrawer()"
    >
      <ng-container *nzDrawerContent>
        <nz-descriptions nzTitle="User Info">
          <nz-descriptions-item nzTitle="UserName">
            Zhou Maomao
          </nz-descriptions-item>
          <nz-descriptions-item nzTitle="Telephone">
            18100000000
          </nz-descriptions-item>
          <nz-descriptions-item nzTitle="Live">
            Hangzhou, Zhejiang
          </nz-descriptions-item>
          <nz-descriptions-item nzTitle="Remark"> Empty </nz-descriptions-item>
          <nz-descriptions-item nzTitle="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </nz-descriptions-item>
        </nz-descriptions>
      </ng-container>
    </nz-drawer>
  `,
})
export class UserViewDdrawerComponent {
  constructor() {}

  visible = false;

  showDrawer(): void {
    this.visible = true;
  }

  closeDrawer(): void {
    this.visible = false;
  }
}
