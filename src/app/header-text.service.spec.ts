import { TestBed } from '@angular/core/testing';

import { HeaderTextService } from './header-text.service';

describe('HeaderTextService', () => {
  let service: HeaderTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
