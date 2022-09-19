import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRegisterComponent } from './register.component';


const routes: Routes = [
    {
        path: 'register',
        component: AppRegisterComponent
    },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
