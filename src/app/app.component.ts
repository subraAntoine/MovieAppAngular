import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopularPageComponent } from './movie/popular-page/popular-page.component';
import { MenuComponent } from './common/menu/menu.component';

@Component({
  selector: 'imdb-root',
  standalone: true,
  imports: [RouterOutlet, PopularPageComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'training';
}
