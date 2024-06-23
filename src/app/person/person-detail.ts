import { Person } from '../movie/person';
import { Type } from 'class-transformer';

export class PersonDetail extends Person {
  biography = '';
  @Type(() => Date) birthday?: Date;
  @Type(() => Date) deathday?: Date;
  place_of_birth = '';
}
