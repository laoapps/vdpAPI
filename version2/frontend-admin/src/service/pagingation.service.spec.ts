import { TestBed } from '@angular/core/testing';

import { PagingationService } from './pagingation.service';

describe('PagingationService', () => {
  let service: PagingationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagingationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
