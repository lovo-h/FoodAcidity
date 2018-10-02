import { NgModule } from '@angular/core';
import { SendgridService, SharedModule } from '../shared';
import { HomeComponent } from './home.component';
import { SubscribeModalComponent } from './subscribe-modal/subscribe-modal.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent,
    SubscribeModalComponent
  ],
  providers: [
    SendgridService,
  ]
})
export class HomeModule {
}
