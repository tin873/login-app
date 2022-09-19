import { NgModule } from '@angular/core';
import { RegisterUserService } from './registerUser/registerUser.service';


@NgModule({
    providers: [
        RegisterUserService
    ]
})
export class ServiceProxyModule { }
