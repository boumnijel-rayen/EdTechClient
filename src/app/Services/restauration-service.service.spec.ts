import { TestBed } from '@angular/core/testing';

import { RestaurationServiceService } from './restauration-service.service';

describe('RestaurationServiceService', () => {
  let service: RestaurationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
