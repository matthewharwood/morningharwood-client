/**
 * Created by matth on 4/19/2017.
 */
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ProfileComponent } from "./profile.component";

export const routerConfig: Routes = [{
  path: '',
  component: ProfileComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);
