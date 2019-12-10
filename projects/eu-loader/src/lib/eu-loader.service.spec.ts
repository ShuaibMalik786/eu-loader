import { TestBed } from '@angular/core/testing';

import { EuLoaderService } from './eu-loader.service';

describe('EuLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EuLoaderService = TestBed.get(EuLoaderService);
    expect(service).toBeTruthy();
  });
});
