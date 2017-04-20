/**
 * Created by matth on 4/19/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component'
import { StoreModule } from "@ngrx/store";
import { routing } from "./admin.route";

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
