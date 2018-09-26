import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { SharedModule } from '../shared';
import { MealValidatorComponent } from './meal-validator.component';
import { FoodListComponent } from '../food-list/food-list.component';

@NgModule({
  imports: [
    NgSelectModule,
    SharedModule
  ],
  declarations: [
    FoodListComponent,
    MealValidatorComponent,
  ]
})
export class MealValidatorModule { }
