import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {interval, Observable, ReplaySubject, Subject} from 'rxjs';
import {Movie} from 'src/domain/movie';

import {MoviesService} from '../../../shared/services/movies.service';
import {debounce, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieSearchComponent implements OnInit, OnDestroy {
  filteredMovies$: Observable<Movie[]>;
  onFilterMovie$: Subject<string>;
  @Output()
  search: EventEmitter<string> = new EventEmitter();

  private isComponentDestroyed: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.onFilterMovie$ = new ReplaySubject(1);
  }

  ngOnDestroy(): void {
    this.isComponentDestroyed = true;
  }

  ngOnInit(): void {
    this.onFilterMovie$
      .pipe(
        takeWhile(() => !this.isComponentDestroyed),
        debounce(() => interval(1000)))
      .subscribe((searchTerm) => {
        this.filteredMovies$ = this.moviesService.search(searchTerm);
        this.changeDetectorRef.detectChanges();
      });
  }

  filterMovies(searchTerm: string): void {
    this.onFilterMovie$.next(searchTerm);
  }

  onSubmit(form: any): void {
    if (form.valid) {
      this.search.emit(form.value.searchTerm);
    }
  }

}
