import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/domain/movie';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(
    private moviesService: MoviesService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movies$ = this.moviesService.search();
  }

  onTitleClick(movie: Movie): void {
    this.router.navigate(['app', 'movie', movie.imdbID]);
  }

  onFavouriteMovieClick(movie: Movie): void {
    this.userService.saveFavouriteMovie(movie);
  }

  onSearch(searchTerm: string): void {
    this.movies$ = this.moviesService.search(searchTerm);
  }

  isYoungMovie(year: number): boolean {
    return year > 2000;
  }
}
