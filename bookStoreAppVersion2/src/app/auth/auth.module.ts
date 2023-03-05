import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
