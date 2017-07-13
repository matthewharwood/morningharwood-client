/**
 * Created by matth on 7/12/2017.
 */


import { RouteDict } from '../+admin/admin.remote';
import { Route } from '@angular/router';
import { SignupComponent } from './signup.component';

export const signUpRoute: Route = {
  path: RouteDict.SIGN_UP,
    component: SignupComponent,
};
