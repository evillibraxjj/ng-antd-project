import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomUserModel } from '@models/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RandomUserService {
  private api: string = 'https://api.randomuser.me/';

  constructor(private http: HttpClient) {}

  getUsers(params: HttpParams): Observable<{ results: RandomUserModel[] }> {
    return this.http.get<{ results: RandomUserModel[] }>(`${this.api}`, {
      params,
    });
  }
}
