/**
 * Created by matth on 4/19/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { CanActivateViaAuthGuard } from '../firebase/auth.service';
import { getRouteDict, RemoteAdmin } from './admin.remote';
import { getPathValues } from '../router/pathMatch';

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
    canActivate: [CanActivateViaAuthGuard],
    resolve: {
      remote: RemoteAdmin,
    },
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
