import { TestBed } from '@angular/core/testing';

import { ActorDetallesService } from './actor-detalles.service';

describe('ActorDetallesService', () => {
  let service: ActorDetallesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorDetallesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
