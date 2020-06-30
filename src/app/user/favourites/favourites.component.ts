import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';
import { Movie } from 'src/domain/movie';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  favouriteMovies: Movie[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.favouriteMovies = this.userService.favouriteMovies;
  }
}
