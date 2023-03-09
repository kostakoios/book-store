import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { BooksModule } from '../books/books.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    UserModule,
    MaterialModule,
    BooksModule,
    RouterModule
  ],
   exports: [ToolbarComponent, FooterComponent, MaterialModule, AuthorComponent]
})
export class SharedModule { }
