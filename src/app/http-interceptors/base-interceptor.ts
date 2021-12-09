import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
} from '@angular/common/http';

import { tap } from 'rxjs/operators';

import { environment } from '@env';
import { throwError } from 'rxjs';

const baseurl = environment.baseurl;

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      url: `${baseurl}${req.url}`,
      setHeaders: { Authorization: 'authToken' },
    });
    const { handleNext, handleError } = this;

    return next.handle(authReq).pipe(tap(handleNext, handleError));
  }

  private handleNext(event: HttpEvent<any>) {
    if (event.type != HttpEventType.Response) return;
    if (event.ok && event.status === 200) return event.body;
    throw throwError('错误日志');
  }
  private handleError(error: HttpErrorResponse) {
    console.info('tab.error', error);
    return error;
  }
}
