import { TestBed } from '@angular/core/testing';

import { SaveCronoService } from './save-crono.service';

describe('SaveCronoService', () => {
  let service: SaveCronoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveCronoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
