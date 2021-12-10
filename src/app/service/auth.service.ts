import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, UrlTree } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';

export interface UserModel {
  account: string;
  password: string;
  remember: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey: string = 'token';
  public readonly loginUrl: string = '/login';

  public isLoading: boolean = false;
  public userInfo: object | null = null;

  get token() {
    return localStorage.getItem(this.storageKey);
  }

  constructor(private http: HttpClient, private router: Router) {}

  login(data: UserModel): void {
    const { router, storageKey } = this;
    this.isLoading = true;
    of(data)
      .pipe(delay(1000))
      .subscribe(() => {
        this.isLoading = false;
        localStorage.setItem(storageKey, new Date().getTime().toString());
        router.navigate(['/']);
      });
  }

  getUserInfo(): UrlTree | Observable<boolean> {
    const { token, router, loginUrl, http } = this;
    if (!token) return router.parseUrl(loginUrl);
    return http.get<boolean | UrlTree>('/users/evillibraxjj').pipe(
      map((e: any) => !!(this.userInfo = e)),
      catchError(() => router.navigate([loginUrl]))
    );
  }
  logout(): void {
    this.isLoading = false;
    this.userInfo = null;
    localStorage.removeItem(this.storageKey);
  }
}
