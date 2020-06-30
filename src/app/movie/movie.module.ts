import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies/movies.component';
import { MovieTitleComponent } from './movies/movie-title/movie-title.component';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';
import { MoviesService } from './movies.service';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MoviesComponent,
    MovieTitleComponent,
    MovieSearchComponent,
    MovieTitleComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    FormsModule,
    SharedModule
  ],
  providers: [MoviesService]
})
export class MovieModule { }
