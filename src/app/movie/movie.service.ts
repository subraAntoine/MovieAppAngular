/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs';
import { Movie } from './movie';
import { plainToInstance } from 'class-transformer';
import { Credits } from './credits';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public popular(): Observable<Movie[]> {
    return (
      this.http
        .get(`/api/movie/popular`)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .pipe(
          map((json: any) => json.results),
          map((json) => plainToInstance(Movie, json as Object[]))
        )
    );
  }

  public movie(id: string): Observable<Movie> {
    return (
      this.http
        .get(`/api/movie/${id}`)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .pipe(map((json) => plainToInstance(Movie, json as Object)))
    );
  }

  public credits(id: string): Observable<Credits> {
    return (
      this.http
        .get(`/api/movie/${id}/credits`)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .pipe(map((json) => plainToInstance(Credits, json as Object)))
    );
  }

  public searchFilm(query: string): Observable<Movie[]> {
    return this.http.get(`/api/search/movie?query=${query}`).pipe(
      map((json: any) => json.results),
      map((json) => plainToInstance(Movie, json as Object[])),
      catchError(() => of([]))
    );
  }
}
