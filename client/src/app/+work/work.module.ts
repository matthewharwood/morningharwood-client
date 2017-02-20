import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from "./work.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routerConfig: Routes = [{
  path: '',
  component: WorkComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);

@NgModule({
  imports: [CommonModule, routing],
  providers: [],
  declarations: [WorkComponent],
  exports: [WorkComponent],
})
export class WorkRouteModule { }
