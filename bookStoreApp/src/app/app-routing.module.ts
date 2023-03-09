import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './public components/about-us/about-us.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './public components/home/home.component';
import { HowItWorksComponent } from './public components/how-it-works/how-it-works.component';
import { BooksComponent } from './books/books.component';


const roots: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  { 
    path: 'auth', 
    component: AuthComponent, 
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  },
  {
    path: 'user/:userId', 
    component: UserComponent,
    loadChildren: () => import('./user/user.module').then(x => x.UserModule)
  },
  {
    path: 'books', 
    component: BooksComponent,
    loadChildren: () => import('./books/books.module').then(x => x.BooksModule)
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(roots),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
