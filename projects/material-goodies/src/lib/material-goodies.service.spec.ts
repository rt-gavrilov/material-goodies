import { TestBed, inject } from '@angular/core/testing';

import { MaterialGoodiesService } from './material-goodies.service';

describe('MaterialGoodiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialGoodiesService]
    });
  });

  it('should be created', inject([MaterialGoodiesService], (service: MaterialGoodiesService) => {
    expect(service).toBeTruthy();
  }));
});
