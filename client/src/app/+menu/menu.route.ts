/**
 * Created by matth on 4/19/2017.
 */

import { MenuComponent } from "./menu.component";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";



export const routerConfig: Routes = [{
  path: '',
  component: MenuComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);
