import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@Component({
  selector: 'imdb-menu',
  standalone: true,
  imports: [RouterLink, AutocompleteComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {}
