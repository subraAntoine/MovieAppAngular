import { Component, Input } from '@angular/core';
import { Movie } from '../movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'imdb-movie-poster',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-poster.component.html',
  styleUrl: './movie-poster.component.css',
})
export class MoviePosterComponent {
  @Input({ required: true }) public movie!: Movie;
}
