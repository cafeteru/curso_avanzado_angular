import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/domain/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favouriteMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.favouriteMovies = this.moviesService.favouriteMovies;
  }

}
