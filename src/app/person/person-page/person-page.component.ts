import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonService } from '../person.service';
import { switchMap } from 'rxjs';
import { PersonDetail } from '../person-detail';
import { PersonDetailComponent } from '../person-detail/person-detail.component';
import { Movie } from '../../movie/movie';
import { MoviePosterComponent } from '../../movie/movie-poster/movie-poster.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'imdb-person-page',
  standalone: true,
  imports: [PersonDetailComponent, MoviePosterComponent],
  templateUrl: './person-page.component.html',
  styleUrl: './person-page.component.css',
})
export class PersonPageComponent {
  public person?: PersonDetail;
  public movies?: Movie[];

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => this.personService.person(params['id']))
      )
      .subscribe((person: PersonDetail) => {
        this.person = person;
        if (this.person) {
          this.titleService.setTitle(person.name);
        }
      });

    this.route.params
      .pipe(
        switchMap((params: Params) =>
          this.personService.personMovies(params['id'])
        )
      )
      .subscribe((movies: Movie[]) => {
        this.movies = movies;
      });
  }
}
