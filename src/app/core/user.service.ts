import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/domain/movie';
import { UserData } from 'src/domain/user-data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static API_URI = 'https://movies-backend-treetechnology.herokuapp.com';
  favouriteMovies: Movie[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  saveFavouriteMovie(movie: Movie): void {
    this.favouriteMovies.push(movie);
  }

  createUser(userData: UserData): Observable<UserData> {
    return this.httpClient.post<UserData>(UserService.API_URI + '/api/auth/register', userData);
  }
}
