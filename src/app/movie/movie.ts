import 'reflect-metadata';
import { Type } from 'class-transformer';

interface IGenre {
  id: string;
  name: string;
}

export class Movie {
  id = 0;
  title = '';
  @Type(() => Date) release_date?: Date;
  poster_path = '';
  overview = '';
  genres: IGenre[] = [];
  budget = 0;
  vote_average = 0;
  vote_count = 0;

  get poster() {
    return `/api${this.poster_path}`;
  }

  get detailRoute() {
    return `/movie/${this.id}`;
  }
}
