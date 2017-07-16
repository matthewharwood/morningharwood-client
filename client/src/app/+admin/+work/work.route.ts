/**
 * Created by matth on 7/10/2017.
 */

import { RouterModule, Routes } from '@angular/router';
import { AdminWorkComponent } from './work.component';
import { RouteDict } from '../admin.remote';
import { ModuleWithProviders } from '@angular/core';
import { PathValue } from '../admin.route';
import { workDetailChildRoute } from './+detail/work-detail.route';
import { AdminWorkDetailComponent } from './+detail/work-detail.component';


export const workDetailRoute: Routes = [
  {
    path: RouteDict.DEFAULT,
    redirectTo: RouteDict.WORK,
    pathMatch: PathValue.FULL,
  },
  {
    path: RouteDict.WORK,
    component: AdminWorkComponent,
    children: workDetailChildRoute
  },
  {
    path: `${RouteDict.WORK}/${RouteDict.WORK_DETAIL}`,
    component: AdminWorkDetailComponent,
  },
  {
    path: `${RouteDict.WORK}/${RouteDict.WORK_DETAIL}/:id`,
    component: AdminWorkDetailComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(workDetailRoute);
