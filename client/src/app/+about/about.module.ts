import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routerConfig: Routes = [{
  path: '',
  component: AboutComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);

@NgModule({
  imports: [CommonModule, routing],
  providers: [],
  declarations: [AboutComponent],
  exports: [AboutComponent],
})
export class AboutRouteModule { }
