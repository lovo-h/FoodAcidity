import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { MealValidatorComponent } from './meal-validator.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MealValidatorComponent,
  ]
})
export class MealValidatorModule { }
