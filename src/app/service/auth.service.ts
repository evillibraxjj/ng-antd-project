import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, UrlTree } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey: string = 'token';
  public token: string | null = null;
  public userInfo: object | null = null;
  public readonly loginUrl: string = '/login';

  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem(this.storageKey);
  }

  login(data?: object): void {
    this.http.get<boolean>('/users/evillibraxjj', data).subscribe((e) => {
      this.token = new Date().getTime().toString();
      localStorage.setItem(this.storageKey, this.token);
      this.router.navigate(['/']);
    });
  }

  getUserInfo(): UrlTree | Observable<boolean> {
    const { token, router } = this;
    if (!token) return router.parseUrl(this.loginUrl);
    return this.http.get<boolean | UrlTree>('/users/evillibraxjj').pipe(
      map((e: any) => !!(this.userInfo = e)),
      catchError(() => this.router.navigate([this.loginUrl]))
    );
  }
  logout(): void {
    this.token = null;
    localStorage.removeItem(this.storageKey);
  }
}
