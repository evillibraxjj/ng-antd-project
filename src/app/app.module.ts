import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@/app.component';

import { AppRoutingModule, APP_COMPONENTS } from './routes';

import { httpInterceptorProviders } from '@/http-interceptors';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
  ],
  declarations: [AppComponent, ...APP_COMPONENTS],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
