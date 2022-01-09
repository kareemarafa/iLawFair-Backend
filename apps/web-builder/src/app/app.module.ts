import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { NavbarModule } from "@ionhour/ui";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
