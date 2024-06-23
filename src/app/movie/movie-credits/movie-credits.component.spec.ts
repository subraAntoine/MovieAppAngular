import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCreditsComponent } from './movie-credits.component';

describe('MovieCreditsComponent', () => {
  let component: MovieCreditsComponent;
  let fixture: ComponentFixture<MovieCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCreditsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
