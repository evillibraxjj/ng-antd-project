import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';

import { UserLoginModel, UserInfoModel } from '@models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageTokenKey: string = 'token';
  private readonly storageUserInfoKey: string = 'userinfo';
  public readonly loginUrl: string = '/login';
  public readonly logoutUrl: string = '/logout';

  public isLoading: boolean = false;

  get token() {
    return localStorage.getItem(this.storageTokenKey);
  }
  get userInfo() {
    const userInfo = localStorage.getItem(this.storageUserInfoKey);
    if (userInfo) return JSON.parse(userInfo) as UserInfoModel;
    return null;
  }

  constructor(private http: HttpClient, private router: Router) {}

  login(data: UserLoginModel): void {
    const { router, storageTokenKey } = this;
    this.isLoading = true;
    of(data)
      .pipe(delay(1000))
      .subscribe(
        () => {
          localStorage.setItem(
            storageTokenKey,
            new Date().getTime().toString()
          );
          router.navigate(['/']);
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate([this.loginUrl]);
  }

  getUserInfo(): Observable<boolean | UserInfoModel> {
    const { router, logoutUrl, storageUserInfoKey } = this;
    return this.http.get<UserInfoModel>('/users/evillibraxjj').pipe(
      tap((e: UserInfoModel) =>
        localStorage.setItem(storageUserInfoKey, JSON.stringify(e))
      ),
      catchError(() => router.navigate([logoutUrl]))
    );
  }

  canActivate(): boolean | UrlTree | Observable<boolean> {
    const { token, userInfo, router, logoutUrl } = this;
    if (!token) return router.parseUrl(logoutUrl);
    if (userInfo) return true;
    return this.getUserInfo().pipe(map((e) => true));
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const { token, userInfo, router, logoutUrl } = this;
    if (!token || !userInfo) return router.parseUrl(logoutUrl);
    const { type } = userInfo;
    if (childRoute.data.type.includes(type)) return true;
    return router.parseUrl('403');
  }
}
