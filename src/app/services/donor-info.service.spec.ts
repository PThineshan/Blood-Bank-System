import { TestBed } from '@angular/core/testing';

import { DonorInfoService } from './donor-info.service';

describe('DonorInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonorInfoService = TestBed.get(DonorInfoService);
    expect(service).toBeTruthy();
  });
});
