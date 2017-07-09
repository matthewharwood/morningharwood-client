/**
 * Created by matth on 4/19/2017.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { StoreModule } from '@ngrx/store';
import { routing } from './admin.route';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../+login/login.component';
import { RemoteAdmin } from './admin.remote';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AuthModule } from '../auth/auth.module';
import { CanActivateViaAuthGuard } from '../auth/auth.service';
import { AdminWorkModule } from './+work/work.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    StoreModule.provideStore({}),
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig.firebase, 'morningharwood-server'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AdminWorkModule,
  ],
  providers: [
    CanActivateViaAuthGuard,
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
