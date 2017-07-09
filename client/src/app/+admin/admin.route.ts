/**
 * Created by matth on 4/19/2017.
 */
/** TODO(Add Auth) **/
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from '../+login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { getRouteDict, RemoteAdmin } from './admin.remote';
import { getPathValues } from '../router/pathMatch';
import { CanActivateViaAuthGuard } from '../auth/auth.service';
import { AdminWorkComponent } from './+work/work.component';

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
  {
    path: RouteDict.WORK,
    component: AdminWorkComponent,
    // canActivate: [CanActivateViaAuthGuard],
  },
  {
    path: RouteDict.LOGIN,
    component: LoginComponent,
  },
  {
    path: RouteDict.SIGN_UP,
    component: SignupComponent,
  },
];


export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);
