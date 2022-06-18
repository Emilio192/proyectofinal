import { TestBed } from '@angular/core/testing';

import { RunaterraService } from './runaterra.service';

describe('RunaterraService', () => {
  let service: RunaterraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunaterraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
