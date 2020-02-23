import { TestBed } from '@angular/core/testing';

import { BloodRequestInfoService } from './blood-request-info.service';

describe('BloodRequestInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloodRequestInfoService = TestBed.get(BloodRequestInfoService);
    expect(service).toBeTruthy();
  });
});
