import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {first, tap} from 'rxjs/operators';
import {UserData} from 'src/domain/user-data';
import {UserLogin} from 'src/domain/user-login';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static API_URI = 'https://movies-backend-treetechnology.herokuapp.com';
  private jwtHelper = new JwtHelperService();
  favouriteMovies$: Subject<string[]>;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  saveFavouriteMovie(imdbID: string): Observable<void> {
    return this.httpClient.post<void>(
      UserService.API_URI + '/api/favourite/add/' + imdbID, {})
      .pipe(
        tap(() => this.pushNewFavouriteMovie(imdbID))
      );
  }

  createUser(userData: UserData): Observable<UserData> {
    return this.httpClient.post<UserData>(
      UserService.API_URI + '/api/auth/register', userData);
  }

  login(userLogin: UserLogin): Observable<any> {
    return this.httpClient.post<void>(
      UserService.API_URI + '/api/auth/login', userLogin)
      .pipe(tap((res: any) => {
        localStorage.setItem('access_token', res.token);
      }));
  }

  isLoggedIn(): boolean {
    return !this.jwtHelper.isTokenExpired(
      localStorage.getItem('access_token'));
  }

  private loadFavouriteMovies(): void {
    this.httpClient.get<string[]>(
      UserService.API_URI + '/api/favourite/list/')
      .subscribe((favouriteMovies: string[]) => {
        this.favouriteMovies$.next(favouriteMovies);
      });
  }

  getFavouriteMovies(): Observable<string[]> {
    if (!this.favouriteMovies$) {
      this.favouriteMovies$ = new ReplaySubject(1);
      this.loadFavouriteMovies();
    }
    return this.favouriteMovies$.asObservable();
  }

  private pushNewFavouriteMovie(imdbID: string): void {
    this.getFavouriteMovies()
      .pipe(first())
      .subscribe((favouriteMovies: string[]) => {
        this.favouriteMovies$.next([...favouriteMovies, imdbID]);
      });
  }
}
