/**
 * Created by matth on 7/10/2017.
 */
/**
 * Created by matth on 7/10/2017.
 */

import { RouterModule, Routes } from '@angular/router';
import { AdminWorkComponent } from './work.component';
import { RouteDict } from '../admin.remote';
import { ModuleWithProviders } from '@angular/core';
import { workDetailChildRoute } from './+detail/work-detail.route';


export const ROUTE: Routes = [
  {
    path: RouteDict.WORK,
    component: AdminWorkComponent,
    children: workDetailChildRoute
  },
];

export const workDetailRoute: ModuleWithProviders = RouterModule.forChild(ROUTE);
