import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routerConfig: Routes = [{
  path: '',
  component: MenuComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);


@NgModule({
  imports: [CommonModule, routing],
  providers: [],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuRouteModule { }
