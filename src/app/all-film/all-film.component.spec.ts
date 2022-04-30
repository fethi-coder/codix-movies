import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFilmComponent } from './all-film.component';

describe('AllFilmComponent', () => {
  let component: AllFilmComponent;
  let fixture: ComponentFixture<AllFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
