import { TestBed, inject } from '@angular/core/testing';

import { FoodService } from './food.service';
import { ApiService } from './api.service';
import { SharedModule } from '../shared.module';

describe('FoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, FoodService],
      imports: [SharedModule]
    });
  });

  it('should be created', inject([FoodService], (service: FoodService) => {
    expect(service).toBeTruthy();
  }));
});
