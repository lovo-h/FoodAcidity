import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { SharedModule } from '../shared';

import { EmailFoodModalComponent } from './email-food-modal/email-food-modal.component';
import { FoodListComponent } from '../food-list/food-list.component';
import { MealValidatorComponent } from './meal-validator.component';


@NgModule({
  imports: [
    NgSelectModule,
    SharedModule
  ],
  declarations: [
    EmailFoodModalComponent,
    FoodListComponent,
    MealValidatorComponent,
  ]
})
export class MealValidatorModule {
}
