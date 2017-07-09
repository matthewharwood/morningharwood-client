/**
 * Created by matth on 4/19/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work.component';
import { routerConfig as WorkPostRoute } from '../+work-post/work-post.route';
import { WorkResolve } from './work.resolve';


export const routerConfig: Routes = [
  {
    path: '',
    component: WorkComponent,
    resolve: {
      remote: WorkResolve,
    }
  },
  ...WorkPostRoute,
];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);
