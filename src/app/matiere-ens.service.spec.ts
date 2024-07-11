import { TestBed } from '@angular/core/testing';

import { MatiereEnsService } from './matiere-ens.service';

describe('MatiereEnsService', () => {
  let service: MatiereEnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatiereEnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
