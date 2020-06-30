import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail/detail.component';
import { MoviesService } from './movies.service';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';
import { MovieTitleComponent } from './movies/movie-title/movie-title.component';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieTitleComponent,
    MovieSearchComponent,
    DetailComponent,
  ],
  exports: [MoviesComponent, DetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    MatAutocompleteModule
  ],
  providers: [MoviesService],
})
export class MovieModule {}