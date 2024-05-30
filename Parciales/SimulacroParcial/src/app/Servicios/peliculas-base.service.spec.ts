import { TestBed } from '@angular/core/testing';

import { PeliculaBaseService } from './peliculas-base.service';

describe('PeliculasBaseService', () => {
  let service: PeliculaBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
