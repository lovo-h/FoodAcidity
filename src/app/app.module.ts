import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MealValidatorModule } from './meal-validator/meal-validator.module';

import {
  ApiService,
  FoodService,
  AppRoutingModule,
  FooterComponent,
  SharedModule
} from './shared';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HomeModule,
    MealValidatorModule,
    SharedModule
  ],
  providers: [
    ApiService,
    FoodService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
