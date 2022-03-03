import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ApiPrefixInterceptor } from './common/api-prefix.interceptor'

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, BrowserAnimationsModule, AppRoutingModule, MatSidenavModule, MatIconModule, MatButtonModule, MatToolbarModule, MatListModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
