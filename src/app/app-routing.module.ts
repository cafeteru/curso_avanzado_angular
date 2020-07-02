import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PrivateRouteGuard} from './private-route.guard';
import {PublicRouteGuard} from './public-route.guard';
import {FavouritesComponent} from './user/favourites/favourites.component';
import {LoginComponent} from './user/login/login.component';
import {NewUserComponent} from './user/new-user/new-user.component';

const routes: Routes = [
  {
    path: 'new-user',
    component: NewUserComponent,
    canActivate: [PublicRouteGuard]
  },
  {
    path: 'app',
    loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: 'app/favourites',
    component: FavouritesComponent,
    canActivate: [PrivateRouteGuard]
  },
  {path: '', component: LoginComponent, canActivate: [PublicRouteGuard]},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
