import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { SharedModule } from '../shared.module';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [SharedModule]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
