import { TestBed } from '@angular/core/testing';

import { NgxsServicesService } from './ngxs-services.service';

describe('NgxsServicesService', () => {
  let service: NgxsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
