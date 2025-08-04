import { TestBed } from '@angular/core/testing';

import { Sharepoint } from './sharepoint';

describe('Sharepoint', () => {
  let service: Sharepoint;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sharepoint);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
