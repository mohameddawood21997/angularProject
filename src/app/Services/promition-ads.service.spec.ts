import { TestBed } from '@angular/core/testing';

import { PromitionAdsService } from './promition-ads.service';

describe('PromitionAdsService', () => {
  let service: PromitionAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromitionAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
