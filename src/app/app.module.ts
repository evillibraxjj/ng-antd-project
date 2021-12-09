import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@/app.component';

import { AppRoutingModule } from './routes';

import { InterceptorProviders } from '@core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [InterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
