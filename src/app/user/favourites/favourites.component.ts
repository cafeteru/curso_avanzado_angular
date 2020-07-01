import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { Movie } from 'src/domain/movie';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  favouriteMovies$: Observable<Movie[]>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.favouriteMovies$ = this.moviesService.getFavouriteMovies().pipe(
      map((ids) => ids.map((id) => this.moviesService.get(id))),
      switchMap((movies) => forkJoin(movies))
    );
  }
}
