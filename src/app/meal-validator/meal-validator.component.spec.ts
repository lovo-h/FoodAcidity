import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealValidatorComponent } from './meal-validator.component';

describe('MealValidatorComponent', () => {
  let component: MealValidatorComponent;
  let fixture: ComponentFixture<MealValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
