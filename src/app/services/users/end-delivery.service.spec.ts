import { TestBed } from '@angular/core/testing';

import { EndDeliveryService } from './end-delivery.service';

describe('EndDeliveryService', () => {
  let service: EndDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
