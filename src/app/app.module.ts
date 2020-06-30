import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { ImpressivePipe } from './impressive.pipe';
import { TableSuccessDirective } from './table-success.directive';
import { MovieTitleComponent } from './movies/movie-title/movie-title.component';
import { MoviesService } from './movies.service';
import { FavouritesComponent } from './favourites/favourites.component';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieTitleComponent,
    MovieSearchComponent,
    ImpressivePipe,
    TableSuccessDirective,
    MovieTitleComponent,
    FavouritesComponent,
    DetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
