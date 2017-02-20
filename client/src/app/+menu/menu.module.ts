import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RunningHeadModule } from '../running-head/running-head.module';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { BonerModule } from '../boner/boner.module';
import { FolioModule } from '../folio/folio.module';

export const routerConfig: Routes = [{
  path: '',
  component: MenuComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);


@NgModule({
  imports: [
    BonerModule,
    CommonModule,
    FolioModule,
    RunningHeadModule,
    routing
  ],
  providers: [],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuRouteModule {
}
