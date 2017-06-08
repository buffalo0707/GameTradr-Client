import { TestBed, async, inject } from '@angular/core/testing';

import { OfferGuard } from './offer.guard';

describe('OfferGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfferGuard]
    });
  });

  it('should ...', inject([OfferGuard], (guard: OfferGuard) => {
    expect(guard).toBeTruthy();
  }));
});
