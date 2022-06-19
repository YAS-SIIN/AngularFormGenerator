import { TestBed } from '@angular/core/testing';

import { ElementsService } from './form.service';

describe('ElementsService', () => {
  let service: ElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
