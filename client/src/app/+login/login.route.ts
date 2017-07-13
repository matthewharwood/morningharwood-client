import { Route } from '@angular/router';
import { RouteDict } from '../+admin/admin.remote';
import { LoginComponent } from './login.component';

export const loginRoute: Route = {
  path: RouteDict.LOGIN,
  component: LoginComponent,
};
