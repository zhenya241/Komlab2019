import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page1Component } from './page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
