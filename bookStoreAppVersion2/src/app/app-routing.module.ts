import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PublicComponent } from './public/public.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'about-us', pathMatch: 'full'},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'about-us', component: AboutUsComponent},
  {
    path: 'public', 
    component: PublicComponent,
    loadChildren: () => import('./public/public.module').then(x => x.PublicModule)
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
