import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from "./work.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ArticleHeaderComponent } from '../article-header/article-header.component';
import { WorkPostComponent } from './post/work-post.component';
import { WorkPostService } from './post/work-post.service';

export const routerConfig: Routes = [{
  path: '',
  component: WorkComponent
}, {
  path: ':id',
  component: WorkPostComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);

@NgModule({
  imports: [CommonModule, routing],
  providers: [WorkPostService],
  declarations: [WorkComponent, ArticleHeaderComponent, WorkPostComponent],
  exports: [WorkComponent],
})
export class WorkRouteModule {
}
