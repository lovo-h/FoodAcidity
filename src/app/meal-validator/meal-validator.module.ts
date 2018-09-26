import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { SharedModule } from '../shared';
import { MealValidatorComponent } from './meal-validator.component';

@NgModule({
  imports: [
    NgSelectModule,
    SharedModule
  ],
  declarations: [
    MealValidatorComponent,
  ]
})
export class MealValidatorModule { }
