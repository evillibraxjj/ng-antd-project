import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanLoad,
  Route,
  UrlTree,
} from '@angular/router';

import { AuthService } from '@service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService // private notification: NzNotificationService
  ) {}

  canActivate = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): UrlTree | Observable<boolean> => this.authService.getUserInfo();

  canActivateChild = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean => true;

  canLoad = (route: Route): boolean => true;
}
