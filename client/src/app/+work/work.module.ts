import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from "./work.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ArticleHeaderComponent } from '../article-header/article-header.component';

export const routerConfig: Routes = [{
  path: '',
  component: WorkComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);

@NgModule({
  imports: [CommonModule, routing],
  providers: [],
  declarations: [WorkComponent, ArticleHeaderComponent],
  exports: [WorkComponent],
})
export class WorkRouteModule {
}
