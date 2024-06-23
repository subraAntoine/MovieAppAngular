import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { MoviePosterComponent } from '../movie-poster/movie-poster.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'imdb-popular-page',
  standalone: true,
  imports: [MoviePosterComponent],
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.css',
})
export class PopularPageComponent implements OnInit {
  public movies?: Movie[] = [];
  constructor(
    private movieService: MovieService,
    private titleService: Title
  ) {}
  ngOnInit() {
    this.movieService.popular().subscribe((movies) => {
      this.movies = movies;
    });

    this.titleService.setTitle('Popular movies');
  }
}
