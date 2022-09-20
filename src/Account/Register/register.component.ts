import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { RegisterUserService } from 'src/shared/service-proxy/registerUser/registerUser.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})
export class AppRegisterComponent {
  title = 'register-app';
  formRegister: FormGroup;
  submitted = false;
  constructor(
    private _fb: FormBuilder,
    private _registerService: RegisterUserService,
    private router: Router
) {
  this.formRegister = this._fb.group({
    userName: [null, [Validators.required]],
    email: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });
}
  ngOnInit(): void {

}
 createUser(){
  this.submitted = true;
  myApp.ui.setBusy();
  this._registerService.createUser(this.formRegister.value)
                      .pipe(
                        finalize(() => {
                          // myApp.ui.clearBusy();
                      }))
                      .subscribe( result => {
                        setTimeout(() => {
                          myApp.ui.clearBusy();
                          this.router.navigate(['/account/login'])
                        }, 250);
                      }, err => {myApp.ui.clearBusy()})
}
}
