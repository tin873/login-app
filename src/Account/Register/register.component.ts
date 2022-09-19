import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    public _fb: FormBuilder,
    private _registerService: RegisterUserService,
) {
  this.formRegister = this._fb.group({
    userName: [null, [Validators.required]],
    email: [null, [Validators.required]],
    passwork: [null, [Validators.required]]
  });
}
  ngOnInit(): void {

}
 createUser(){
  myApp.ui.setBusy();
  this._registerService.createUser(this.formRegister.value)
                      .pipe(
                        finalize(() => {
                          myApp.ui.clearBusy();
                      })
                      )
                      .subscribe()
}
}
