import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { PublicModule } from '../public/public.module';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    UserModule,
    PublicModule,
  ]
})
export class SharedModule { }
