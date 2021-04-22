import { TestBed } from '@angular/core/testing';

import { RecoverpassService } from './recoverpass.service';

describe('RecoverpassService', () => {
  let service: RecoverpassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverpassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
