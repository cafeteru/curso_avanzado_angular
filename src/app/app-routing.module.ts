import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './movie/detail/detail.component';
import { MoviesComponent } from './movie/movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivateRouteGuard } from './private-route.guard';
import { PublicRouteGuard } from './public-route.guard';
import { LoginComponent } from './user/login/login.component';
import { NewUserComponent } from './user/new-user/new-user.component';

const routes: Routes = [
  { path: 'new-user', component: NewUserComponent, canActivate: [PublicRouteGuard] },
  { path: 'app', component: MoviesComponent, canActivate: [PrivateRouteGuard] },
  { path: 'app/movie/:imdbID', component: DetailComponent, canActivate: [PrivateRouteGuard] },
  { path: '', component: LoginComponent, canActivate: [PublicRouteGuard] },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
