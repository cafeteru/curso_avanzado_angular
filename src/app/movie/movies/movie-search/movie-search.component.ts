import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from 'src/domain/movie';

import {MoviesService} from '../../../shared/services/movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieSearchComponent implements OnInit {

  filteredMovies$: Observable<Movie[]>;

  @Output()
  search: EventEmitter<string> = new EventEmitter();

  constructor(
    private moviesService: MoviesService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
  }

  filterMovies(searchTerm: string) {
    this.filteredMovies$ = this.moviesService.search(searchTerm);
    this.changeDetectorRef.detectChanges();
  }

  onSubmit(form: any): void {
    if (form.valid){
      this.search.emit(form.value.searchTerm);
    }
  }

}
