import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { BooksModule } from '../books/books.module';


@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    UserModule,
    MaterialModule,
    BooksModule
  ],
   exports: [ToolbarComponent]
})
export class SharedModule { }
