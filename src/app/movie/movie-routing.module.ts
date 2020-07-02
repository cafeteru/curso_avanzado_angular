import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {DetailComponent} from './detail/detail.component';
import {PrivateRouteGuard} from '../private-route.guard';

const routes: Routes = [
  {path: '', component: MoviesComponent, canActivate: [PrivateRouteGuard]},
  {
    path: 'movie/:imdbID',
    component: DetailComponent,
    canActivate: [PrivateRouteGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
