import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './movie/detail/detail.component';
import { MoviesComponent } from './movie/movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './user/login/login.component';
import { NewUserComponent } from './user/new-user/new-user.component';

const routes: Routes = [
  { path: 'app', component: MoviesComponent },
  { path: 'app/movie/:imdbID', component: DetailComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
