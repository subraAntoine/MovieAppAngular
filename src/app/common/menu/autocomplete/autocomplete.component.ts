import { Component, ElementRef, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../../movie/movie.service';
import { Movie } from '../../../movie/movie';
import { Subject, debounceTime, switchMap, tap } from 'rxjs';

@Component({
  selector: 'imdb-autocomplete',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css',
})
export class AutocompleteComponent {
  query = '';
  displayResults = false;
  subject = new Subject<string>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movie: Movie[] = [];
  constructor(
    private movieService: MovieService,
    private elementRef: ElementRef
  ) {
    this.subject
      .pipe(
        debounceTime(200),
        switchMap((value: string) => movieService.searchFilm(value)),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tap((data: any) => console.log(data))
      )
      .subscribe((movie: Movie[]) => (this.movie = movie));
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: EventTarget): void {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.close();
    }
  }

  onKeyUp() {
    if (this.query.length > 3) {
      this.subject.next(this.query);
    } else {
      this.movie = [];
    }

    /*this.movieService
      .searchFilm(this.query)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .subscribe((movie: any) => (this.movie = movie));
    console.log(this.movie);
    if (this.query.length === 0) {
      this.displayResults = false;
    } else {
      this.displayResults = true;
    }*/
  }

  close() {
    this.displayResults = false;
  }

  handleDisplay() {
    this.displayResults = !this.displayResults;
  }

  displayOff() {
    this.displayResults = false;
    this.query = '';
    this.movie = [];
  }
}
