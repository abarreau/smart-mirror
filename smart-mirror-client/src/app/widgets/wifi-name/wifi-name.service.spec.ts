import { TestBed, inject } from '@angular/core/testing';

import { WifiNameService } from './wifi-name.service';

describe('WifiNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WifiNameService]
    });
  });

  it('should be created', inject([WifiNameService], (service: WifiNameService) => {
    expect(service).toBeTruthy();
  }));
});
