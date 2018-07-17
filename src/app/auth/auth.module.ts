import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule, ShowAuthedDirective } from '../shared';
import { AuthComponent } from './auth.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AuthComponent
  ],
  providers: [
    // NoAuthGuardService
  ]
})
export class AuthModule {
}
