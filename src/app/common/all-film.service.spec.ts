import { TestBed } from '@angular/core/testing';

import { AllFilmService } from './all-film.service';

describe('AllFilmService', () => {
  let service: AllFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
