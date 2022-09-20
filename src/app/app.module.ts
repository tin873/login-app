import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginRoutingModule } from 'src/Account/Login/login-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from 'src/Account/account.module';
import { ServiceProxyModule } from 'src/shared/service-proxy/service-proxy.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
