import { TestBed } from '@angular/core/testing';

import { BookRivewHttpService } from './book-rivew-http.service';

describe('BookRivewHttpService', () => {
  let service: BookRivewHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRivewHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
