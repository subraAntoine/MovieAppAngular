/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { map } from 'rxjs';
import { PersonDetail } from './person-detail';
import { Movie } from '../movie/movie';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  public person(id: string): Observable<PersonDetail> {
    return (
      this.http
        .get(`/api/person/${id}`)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .pipe(map((json) => plainToInstance(PersonDetail, json as Object)))
    );
  }

  public personMovies(id: string): Observable<Movie[]> {
    return (
      this.http
        .get(`/api/discover/movie?with_cast=${id}`)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .pipe(
          map((json: any) => json.results),
          map((json) => plainToInstance(Movie, json as Object[]))
        )
    );
  }
}
