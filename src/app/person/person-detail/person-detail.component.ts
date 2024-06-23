import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { PersonDetail } from '../person-detail';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'imdb-person-detail',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './person-detail.component.html',
  styleUrl: './person-detail.component.css',
})
export class PersonDetailComponent {
  @Input({ required: true }) person!: PersonDetail;
}
