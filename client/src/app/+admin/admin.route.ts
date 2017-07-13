/**
 * Created by matth on 4/19/2017.
 */
/** TODO(Add Auth) **/
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ModuleWithProviders } from '@angular/core';
import { getRouteDict, RemoteAdmin } from './admin.remote';
import { getPathValues } from '../router/pathMatch';
import { workDetailRoute } from './+work/work.route';
import { loginRoute } from '../+login/login.route';
import { signUpRoute } from '../signup/signup.route';

export const RouteDict = getRouteDict();
export const PathValue = getPathValues();

export const routerConfig: Routes = [
  {
    path: RouteDict.DEFAULT,
    redirectTo: RouteDict.LOGIN,
    pathMatch: PathValue.FULL,
  },
  {
    path: RouteDict.DASHBOARD,
    component: AdminComponent,
    // canActivate: [CanActivateViaAuthGuard],
    resolve: {
      remote: RemoteAdmin,
    },
  },
  ...workDetailRoute,
  loginRoute,
  signUpRoute,
];


export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);
