import { TestBed } from '@angular/core/testing';

import { ActorBaseService } from './actor-base.service';

describe('ActorBaseService', () => {
  let service: ActorBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
