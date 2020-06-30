import { Component, OnInit } from '@angular/core';
import { MovieDetail } from 'src/domain/movie-detail';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  movie: MovieDetail;

  constructor(private moviesService: MoviesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.moviesService.get(this.activatedRoute.snapshot.params.imdbID)
      .subscribe((movieDetail) => this.movie = movieDetail);
  }

}

