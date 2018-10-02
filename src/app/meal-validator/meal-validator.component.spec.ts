import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSelectModule } from '@ng-select/ng-select';


import { EmailFoodModalComponent } from './email-food-modal/email-food-modal.component';
import { FoodListComponent } from '../food-list/food-list.component';
import { HomeComponent } from '../home/home.component';
import { MealValidatorComponent } from './meal-validator.component';
import { SubscribeModalComponent } from '../home/subscribe-modal/subscribe-modal.component';

import { AppRoutingModule, SharedModule } from '../shared';
import { APP_BASE_HREF } from '@angular/common';

describe('MealValidatorComponent', () => {
  let component: MealValidatorComponent;
  let fixture: ComponentFixture<MealValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmailFoodModalComponent,
        FoodListComponent,
        HomeComponent,
        MealValidatorComponent,
        SubscribeModalComponent
      ],
      imports: [AppRoutingModule, NgSelectModule, SharedModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
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
