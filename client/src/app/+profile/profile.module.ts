import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from "./profile.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routerConfig: Routes = [{
  path: '',
  component: ProfileComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);

@NgModule({
  imports: [CommonModule, routing],
  providers: [],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
})
export class ProfileRouteModule { }
