/**
 * Created by matth on 4/19/2017.
 */
/** TODO(Add Auth) **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { StoreModule } from '@ngrx/store';
import { routing } from './admin.route';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
// import { AngularFireClientModule } from '../firebase/af.module';
// import { AF } from '../firebase/login.service';
// import { CanActivateViaAuthGuard } from '../firebase/auth.service';
import { RemoteAdmin } from './admin.remote';

@NgModule({
  imports: [
    CommonModule,
    routing,
    StoreModule.provideStore({}),
    // AngularFireClientModule,
  ],
  providers: [
    // AF,
    // CanActivateViaAuthGuard,
    RemoteAdmin,
  ],
  declarations: [
    AdminComponent,
    LoginComponent,
    SignupComponent,
  ],
  exports: [
    AdminComponent,
  ],
})
export class AdminRouteModule {
}
