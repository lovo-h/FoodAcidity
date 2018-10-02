import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFoodModalComponent } from './email-food-modal.component';

describe('EmailFoodModalComponent', () => {
  let component: EmailFoodModalComponent;
  let fixture: ComponentFixture<EmailFoodModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailFoodModalComponent ]
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
