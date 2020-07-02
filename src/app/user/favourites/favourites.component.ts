import {Component, OnInit} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Movie} from 'src/domain/movie';
import {UserService} from '../../core/user.service';
import {MoviesService} from '../../shared/services/movies.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  favouriteMovies$: Observable<Movie[]>;

  constructor(
    private userService: UserService,
    private moviesService: MoviesService
  ) {
  }

  ngOnInit(): void {
    this.favouriteMovies$ = this.userService.getFavouriteMovies().pipe(
      map((ids) => ids.map(
        (id) => this.moviesService.get(id))),
      switchMap((movies) => forkJoin(movies))
    );
  }
}
