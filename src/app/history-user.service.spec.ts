import { TestBed } from '@angular/core/testing';

import { HistoryUserService } from './history-user.service';

describe('HistoryUserService', () => {
  let service: HistoryUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
