import { TestBed } from '@angular/core/testing';

import { DetallePeliculaService } from './peliculas-detalles.service';

describe('PeliculasDetallesService', () => {
  let service: DetallePeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallePeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
