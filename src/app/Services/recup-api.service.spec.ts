import { TestBed } from '@angular/core/testing';

import { RecupApiService } from './recup-api.service';

describe('RecupApiService', () => {
  let service: RecupApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecupApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
