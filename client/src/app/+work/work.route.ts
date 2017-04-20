/**
 * Created by matth on 4/19/2017.
 */
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorkComponent } from "./work.component";
import { WorkPostComponent } from '../+work-post/work-post.component';


export const routerConfig: Routes = [{
  path: '',
  component: WorkComponent
}, {
  path: ':id',
  component: WorkPostComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);
