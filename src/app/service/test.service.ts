import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  public testString: string = '';

  constructor() {}

  setStr(val: string): void {
    this.testString = val;
  }
}
