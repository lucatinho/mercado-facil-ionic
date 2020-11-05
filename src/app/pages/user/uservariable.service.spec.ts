import { TestBed } from '@angular/core/testing';

import { UservariableService } from './uservariable.service';

describe('UservariableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UservariableService = TestBed.get(UservariableService);
    expect(service).toBeTruthy();
  });
});
