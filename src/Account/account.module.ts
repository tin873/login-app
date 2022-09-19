import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRegisterComponent } from './Register/register.component';
import { AppLoginComponent } from './Login/login.component';
import { AccountRoutingModule } from './account-routing.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AccountRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppRegisterComponent,
        AppLoginComponent
    ],
    entryComponents: [
    ]
})
export class AccountModule {

}
