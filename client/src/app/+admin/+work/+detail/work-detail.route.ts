/**
 * Created by matth on 7/10/2017.
 */

import { RouterModule, Routes } from '@angular/router';
import { AdminWorkDetailComponent } from './work-detail.component';
import { RouteDict } from '../../admin.remote';
import { ModuleWithProviders } from '@angular/core';

export const workDetailChildRoute: Routes = [
  {
    path: RouteDict.DEFAULT,
    component: AdminWorkDetailComponent,
  },
  {
    path: `${RouteDict.WORK_DETAIL}/:id`,
    component: AdminWorkDetailComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(workDetailChildRoute);
