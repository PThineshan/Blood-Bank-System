import { TestBed } from '@angular/core/testing';

import { DonorGuardService } from './donor-guard.service';

describe('DonorGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonorGuardService = TestBed.get(DonorGuardService);
    expect(service).toBeTruthy();
  });
});
