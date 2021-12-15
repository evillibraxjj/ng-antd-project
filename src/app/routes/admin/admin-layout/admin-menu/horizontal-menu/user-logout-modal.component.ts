import { Component } from '@angular/core';

import { NzModalService } from 'ng-zorro-antd/modal';

import { AuthService } from '@service/auth.service';

@Component({
  selector: 'app-user-logout-modal',
  template: `
    <a nz-button nzType="link" (click)="showDeleteConfirm()">退出登录</a>
  `,
})
export class UserLogoutModalComponent {
  constructor(
    private authService: AuthService,
    private modal: NzModalService
  ) {}
  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: '确定退出？',
      nzContent: '退出后将会清空所有缓存数据！',
      nzOkText: '确定',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.authService.logout(),
      nzCancelText: '取消',
    });
  }
}
