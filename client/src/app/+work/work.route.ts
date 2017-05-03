/**
 * Created by matth on 4/19/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work.component';
import { routerConfig as WorkPostRoute } from '../+work-post/work-post.route';


export const routerConfig: Routes = [
  {
    path: '',
    component: WorkComponent,
  },
  ...WorkPostRoute,
];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);
