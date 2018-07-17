import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../../auth/auth.component';

import { HomeComponent } from '../../home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthComponent },
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
