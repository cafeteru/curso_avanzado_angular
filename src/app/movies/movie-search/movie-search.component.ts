import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/domain/movie';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  filteredMovies$: Observable<Movie[]>;

  @Output() 
  search: EventEmitter<string> = new EventEmitter();

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  filterMovies(searchTerm: string){
    this.filteredMovies$ = this.moviesService.search(searchTerm);
  }

  onSubmit(form: any): void {
    if (form.valid){
      this.search.emit(form.value.searchTerm);
    }
  }

}
