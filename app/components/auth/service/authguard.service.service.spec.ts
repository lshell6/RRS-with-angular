import { TestBed } from '@angular/core/testing';

import { Authguard.ServiceService } from './authguard.service.service';

describe('Authguard.ServiceService', () => {
  let service: Authguard.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authguard.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
