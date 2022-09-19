import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginRoutingModule } from 'src/Account/Login/login-routing.module';
import { RegisterRoutingModule } from 'src/Account/Register/register-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    RegisterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
