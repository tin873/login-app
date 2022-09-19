import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLoginComponent } from './Login/login.component';
import { AppRegisterComponent } from './Register/register.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'login',
                component: AppLoginComponent,
            },
            {
                path: 'register',
                component: AppRegisterComponent,
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRoutingModule { }
