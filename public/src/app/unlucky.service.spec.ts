import { TestBed, inject } from '@angular/core/testing';

import { UnluckyService } from './unlucky.service';

describe('UnluckyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnluckyService]
    });
  });

  it('should be created', inject([UnluckyService], (service: UnluckyService) => {
    expect(service).toBeTruthy();
  }));
});
