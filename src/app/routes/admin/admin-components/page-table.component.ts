import { HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';

import { NzTableQueryParams } from 'ng-zorro-antd/table';

interface PageInfoModel {
  page: number;
  results: number;
  seed: string;
  version: string;
}

interface TablePageModel {
  info: PageInfoModel;
  results: any[];
}

@Component({
  selector: 'app-page-table',
  template: `
    <nz-table
      nzShowSizeChanger
      [nzLoading]="loading"
      [nzData]="data"
      [nzPageIndex]="pageIndex"
      [nzPageSize]="pageSize"
      [nzTotal]="dataTotal"
      [nzFrontPagination]="false"
      (nzQueryParams)="onQueryParamsChange($event)"
      [nzScroll]="{ y: 'calc(100vh - 340px)' }"
      [nzTitle]="headerTemplate"
    >
      <thead>
        <ng-content select="thead"></ng-content>
      </thead>
      <tbody>
        <tr *ngFor="let item of data">
          <td>{{ item.name.first }} {{ item.name.last }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.email }}</td>
        </tr>

        <ng-content select="[tbody]"></ng-content>
      </tbody>
    </nz-table>
    <ng-template #headerTemplate>
      <ng-content select="form"></ng-content>
    </ng-template>
  `,
})
export class PageTableComponent {
  @Input() load: Function | null = null;

  loading: boolean = true;

  pageIndex: number = 1;
  pageSize: number = 10;
  dataTotal: number = 200;
  data: any[] = [];

  constructor() {}
  private loadDataFromServer(): void {
    if (!this.load) return;
    this.loading = true;
    const { pageIndex, pageSize } = this;
    const params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`);
    this.load(params).subscribe(
      (data: TablePageModel) => {
        this.pageIndex = data.info.page;
        this.data = data.results;
      },
      () => (this.data = []),
      () => (this.loading = false)
    );
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageIndex, pageSize } = params;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.loadDataFromServer();
  }

  onRefresh() {
    this.pageIndex = 1;
    this.loadDataFromServer();
  }
}
