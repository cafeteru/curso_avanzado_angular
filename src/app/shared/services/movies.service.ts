import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Movie} from 'src/domain/movie';
import {MovieDetail} from 'src/domain/movie-detail';

import {UserService} from '../../core/user.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService) {
  }

  static API_URI = 'https://www.omdbapi.com';
  static API_KEY = 'b0930d45';

  private static convertToMovies(movieList: any[]): Movie[] {
    return movieList.map((movie) => {
      return {
        title: movie.Title,
        imdbID: movie.imdbID,
        poster: movie.Poster,
        type: movie.Type,
        year: movie.Year,
        state: ''
      };
    });
  }

  private static convertToMovieDetail(movie: any): MovieDetail {
    return {
      title: movie.Title,
      imdbID: movie.imdbID,
      poster: movie.Poster,
      type: movie.Type,
      year: movie.Year,
      plot: movie.Plot,
      runtime: movie.Runtime,
      state: ''
    };
  }

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
      .pipe(map((response) => MoviesService.convertToMovies(response.Search)));
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
      .pipe(map((response) => MoviesService.convertToMovieDetail(response)));
  }
}
