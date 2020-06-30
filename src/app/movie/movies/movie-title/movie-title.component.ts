import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/domain/movie';

@Component({
  selector: 'app-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.css']
})
export class MovieTitleComponent implements OnInit {
  @Input()
  movie: Movie;

  @Output()
  titleClick: EventEmitter<Movie> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  onTitleClick(movie: Movie){
    this.titleClick.emit(movie);
  }
}
