import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginHttpInterceptor } from './login-http-interceptor';
import { RegisterUserService } from './registerUser/registerUser.service';


@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoginHttpInterceptor,
            multi: true
        },
    ]
})
export class ServiceProxyModule { }
