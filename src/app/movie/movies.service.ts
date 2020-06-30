import { Injectable } from '@angular/core';
import { Movie } from 'src/domain/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDetail } from 'src/domain/movie-detail';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  static API_URI: string = 'https://www.omdbapi.com';
  static API_KEY: string = 'b0930d45';

  constructor(private httpClient: HttpClient) {}

  search(searchTerm?: string): Observable<Movie[]> {
    if (!searchTerm) {
      searchTerm = 'Terminator';
    }
    return this.httpClient
      .get<any>(
        MoviesService.API_URI +
          '/?s=' +
          searchTerm +
          '&apiKey=' +
          MoviesService.API_KEY
      )
      .pipe(map((response) => this.convertToMovies(response.Search)));
  }

  get(imdbID: string): Observable<MovieDetail> {
    return this.httpClient
      .get<any>(
        MoviesService.API_URI +
          '/?i=' +
          imdbID +
          '&apiKey=' +
          MoviesService.API_KEY
      )
      .pipe(map((response) => this.convertToMovieDetail(response)));
  }

  private convertToMovies(movieList: any[]): Movie[] {
    return movieList.map((movie) => {
      return {
        title: movie.Title,
        imdbID: movie.imdbID,
        poster: movie.Poster,
        type: movie.Type,
        year: movie.Year,
      };
    });
  }

  private convertToMovieDetail(movie: any): MovieDetail {
    return {
      title: movie.Title,
      imdbID: movie.imdbID,
      poster: movie.Poster,
      type: movie.Type,
      year: movie.Year,
      plot: movie.Plot,
      runtime: movie.Runtime,
    };
  }
}
