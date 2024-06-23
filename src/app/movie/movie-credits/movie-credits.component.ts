import { Component, Input } from '@angular/core';
import { Credits } from '../credits';
import { RouterLink } from '@angular/router';
import { ScrollComponent } from '../../common/scroll/scroll.component';

@Component({
  selector: 'imdb-movie-credits',
  standalone: true,
  imports: [RouterLink, ScrollComponent],
  templateUrl: './movie-credits.component.html',
  styleUrl: './movie-credits.component.css',
})
export class MovieCreditsComponent {
  @Input({ required: true }) credits!: Credits;
}
