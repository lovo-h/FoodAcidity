import { TestBed, async } from '@angular/core/testing';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { EmailFoodModalComponent } from './meal-validator/email-food-modal/email-food-modal.component';
import { FooterComponent } from './shared';
import { FoodListComponent } from './food-list/food-list.component';
import { HomeComponent } from './home/home.component';
import { MealValidatorComponent } from './meal-validator/meal-validator.component';
import { SubscribeModalComponent } from './home/subscribe-modal/subscribe-modal.component';
import { AppRoutingModule, SharedModule } from './shared';

import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EmailFoodModalComponent,
        FoodListComponent,
        FooterComponent,
        HomeComponent,
        MealValidatorComponent,
        SubscribeModalComponent,
      ],
      imports: [AppRoutingModule, NgSelectModule, SharedModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
