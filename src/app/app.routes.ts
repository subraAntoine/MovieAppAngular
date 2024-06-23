import { Routes } from '@angular/router';
import { PopularPageComponent } from './movie/popular-page/popular-page.component';
import { MoviePageComponent } from './movie/movie-page/movie-page.component';
import { PersonPageComponent } from './person/person-page/person-page.component';

export const routes: Routes = [
  {
    path: 'movie',
    children: [
      { path: 'popular', component: PopularPageComponent },
      { path: ':id', component: MoviePageComponent },
    ],
  },
  {
    path: 'person',
    children: [{ path: ':id', component: PersonPageComponent }],
  },
  { path: '**', redirectTo: 'movie/popular', pathMatch: 'full' },
];
