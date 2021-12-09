import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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

  login(data?: object): void {
    const { router, storageKey, http } = this;
    this.isLoading = true;
    http.get<boolean>('/users/evillibraxjj', data).subscribe(
      () => {
        localStorage.setItem(storageKey, new Date().getTime().toString());
        router.navigate(['/']);
      },
      () => {
        this.isLoading = false;
      }
    );
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
