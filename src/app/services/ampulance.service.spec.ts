import { TestBed } from '@angular/core/testing';

import { AmpulanceService } from './ampulance.service';

describe('AmpulanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmpulanceService = TestBed.get(AmpulanceService);
    expect(service).toBeTruthy();
  });
});
