import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const root: Routes = [
  {
    path: 'public', component: PublicComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'all-books', component: AllBooksComponent},
      {path: 'book-details/:id/author/:authorId', component: BookDetailsComponent}
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(root)
  ],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
