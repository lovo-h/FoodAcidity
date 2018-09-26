import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { MealValidatorComponent } from '../../meal-validator/meal-validator.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manage', component: MealValidatorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
