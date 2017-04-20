/**
 * Created by matth on 4/19/2017.
 */
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ModuleWithProviders } from "@angular/core";

export const routerConfig: Routes = [{
  path: '',
  component: AdminComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);
