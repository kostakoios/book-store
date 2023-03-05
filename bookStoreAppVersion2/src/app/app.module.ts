import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HowItWorksComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    PublicModule,
    UserModule,
    SharedModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
