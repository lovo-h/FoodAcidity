import { TestBed, inject } from '@angular/core/testing';

import { SendgridService } from './sendgrid.service';
import { SharedModule } from '../shared.module';

describe('SendgridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendgridService],
      imports: [SharedModule],
    });
  });

  it('should be created', inject([SendgridService], (service: SendgridService) => {
    expect(service).toBeTruthy();
  }));
});
