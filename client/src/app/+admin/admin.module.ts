/**
 * Created by matth on 4/19/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AdminComponent } from './admin.component'
import { StoreModule } from "@ngrx/store";

export const routerConfig: Routes = [{
  path: '',
  component: AdminComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);

@NgModule({
  imports: [
    CommonModule,
    routing,
    StoreModule.provideStore({}),
  ],
  providers: [],
  declarations: [AdminComponent],
  exports: [AdminComponent],
})
export class AdminRouteModule {
}
