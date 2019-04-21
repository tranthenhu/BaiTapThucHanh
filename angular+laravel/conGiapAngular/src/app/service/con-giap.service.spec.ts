import { TestBed } from '@angular/core/testing';

import { ConGiapService } from './con-giap.service';

describe('ConGiapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConGiapService = TestBed.get(ConGiapService);
    expect(service).toBeTruthy();
  });
});
