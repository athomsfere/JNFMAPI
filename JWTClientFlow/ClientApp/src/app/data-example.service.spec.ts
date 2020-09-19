import { TestBed } from '@angular/core/testing';

import { DataExampleService } from './data-example.service';

describe('DataExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataExampleService = TestBed.get(DataExampleService);
    expect(service).toBeTruthy();
  });
});
