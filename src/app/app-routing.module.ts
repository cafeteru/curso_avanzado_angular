import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviesComponent } from './movie/movies/movies.component';
import { DetailComponent } from './movie/detail/detail.component';

const routes: Routes = [
  { path: 'app', component: MoviesComponent },
  { path: 'app/movie/:imdbID', component: DetailComponent },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
