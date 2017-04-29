/**
 * Created by matth on 4/19/2017.
 */
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
import { CanActivateViaAuthGuard } from "../firebase/auth.service";
import { createStringEnum } from "../_handies/stringToEnum";


export type RoutePathType =
  | 'login'
  | 'dashboard'
  | 'login'
  | 'signup'

export const RouteList = createStringEnum([
  'login',
  'dashboard',
  'login',
  'signup',
]);


export const routerConfig: Routes = [
  { path: '', redirectTo: RouteList.login, pathMatch: 'full' },
  {
    path: RouteList.dashboard,
    component: AdminComponent,
    canActivate: [CanActivateViaAuthGuard],
  },
  {path: RouteList.login, component: LoginComponent},
  {path: RouteList.signup, component: SignupComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);
