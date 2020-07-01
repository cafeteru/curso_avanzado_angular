import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Movie } from 'src/domain/movie';
import { UserData } from 'src/domain/user-data';
import { UserLogin } from 'src/domain/user-login';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  static API_URI = 'https://movies-backend-treetechnology.herokuapp.com';
  favouriteMovies: Movie[] = [];

  private jwtHelper = new JwtHelperService();

  constructor(
    private httpClient: HttpClient
  ) { }

  saveFavouriteMovie(movie: Movie): void {
    this.favouriteMovies.push(movie);
  }

  createUser(userData: UserData): Observable<UserData> {
    return this.httpClient.post<UserData>(UserService.API_URI + '/api/auth/register', userData);
  }

  login(userLogin: UserLogin): Observable<any> {
    return this.httpClient.post<void>(UserService.API_URI + '/api/auth/login', userLogin)
      .pipe(tap((res: any) => {
        console.log(res);
        localStorage.setItem('access_token', res.token);
      }));
  }

  isLoggedIn(): boolean {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem('access_token'));
  }
}
