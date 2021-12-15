import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzResultStatusType } from 'ng-zorro-antd/result';

interface ResultModel {
  status: NzResultStatusType;
  title: string;
  subTitle: string;
}

@Component({
  selector: 'app-page-result',
  templateUrl: './page-result.component.html',
  styleUrls: ['./page-result.component.less'],
})
export class PageResultComponent {
  resultModel: ResultModel;

  constructor(private route: ActivatedRoute) {
    const { routeConfig } = this.route;
    this.resultModel = {
      status: routeConfig?.data?.state ?? '404',
      title: routeConfig?.data?.title ?? '',
      subTitle: routeConfig?.data?.subTitle ?? '',
    };
  }
}
