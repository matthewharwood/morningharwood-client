/**
 * Created by matth on 4/19/2017.
 */
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
import { CanActivateViaAuthGuard } from "../firebase/auth.service";

export const routerConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: AdminComponent,
    resolve: [CanActivateViaAuthGuard],
  },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);
