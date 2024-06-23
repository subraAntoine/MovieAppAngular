import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Params } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { Credits } from '../credits';
import { MovieCreditsComponent } from '../movie-credits/movie-credits.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'imdb-movie-page',
  standalone: true,
  imports: [MovieDetailComponent, RouterLink, MovieCreditsComponent],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css',
})
export class MoviePageComponent {
  public movie?: Movie;
  public credits?: Credits;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private titleService: Title
  ) {}
  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => this.movieService.movie(params['id']))
      )
      .subscribe((movie) => {
        this.movie = movie;
        if (this.movie) {
          this.titleService.setTitle(movie.title);
        }
      });
    this.route.params
      .pipe(
        switchMap((params: Params) => this.movieService.credits(params['id']))
      )
      .subscribe((credits) => {
        this.credits = credits;
      });
  }
}
