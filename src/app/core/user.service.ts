import { Injectable } from '@angular/core';
import { Movie } from 'src/domain/movie';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  favouriteMovies: Movie[] = [];
  constructor() {}

  saveFavouriteMovie(movie: Movie): void {
    this.favouriteMovies.push(movie);
  }
}
