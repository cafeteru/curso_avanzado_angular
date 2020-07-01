import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user.service';
import { Movie } from 'src/domain/movie';

import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  animations: [
    trigger('dissapearing', [
      transition('* => void', [
        animate('1000ms', style({
          opacity: 0
        }))
      ])
    ]),
    trigger('favourite', [
      state('fav', style({
        color: '#28a745',
        backgroundColor: '#28a745',
        borderColor: '#28a745'
      })),
      transition('* => fav', animate('300ms ease-in'))
    ])
  ]
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(
    private moviesService: MoviesService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.movies$ = this.moviesService.search();
  }

  onTitleClick(movie: Movie): void {
    this.router.navigate(['app', 'movie', movie.imdbID]);
  }

  onFavouriteMovieClick(movie: Movie): void {
    this.userService.saveFavouriteMovie(movie.imdbID).subscribe(
      () => movie.state = 'fav'
    );
  }

  onSearch(searchTerm: string): void {
    this.movies$ = this.moviesService.search(searchTerm);
  }

  isYoungMovie(year: number): boolean {
    return year > 2000;
  }
}
