import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFoodModalComponent } from './email-food-modal.component';
import { SharedModule } from '../../shared';

describe('EmailFoodModalComponent', () => {
  let component: EmailFoodModalComponent;
  let fixture: ComponentFixture<EmailFoodModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailFoodModalComponent],
      imports: [SharedModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFoodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
