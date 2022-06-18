import { TestBed } from '@angular/core/testing';

import { FormCreatorService } from './form-creator.service';

describe('FormCreatorService', () => {
  let service: FormCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
