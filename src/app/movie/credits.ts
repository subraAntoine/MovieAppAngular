import 'reflect-metadata';
import { Type } from 'class-transformer';
import { Cast } from './cast';
import { Crew } from './crew';

export class Credits {
  id = 0;
  @Type(() => Cast)
  cast: Cast[] = [];
  @Type(() => Crew)
  crew: Crew[] = [];
}
