import { NgModule } from '@angular/core';
import { SendgridService, SharedModule } from '../shared';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    SendgridService,
  ]
})
export class HomeModule {
}
