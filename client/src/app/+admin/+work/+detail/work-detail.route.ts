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
    redirectTo: RouteDict.WORK_DETAIL,
    pathMatch: 'full',
  },
  {
    path: RouteDict.WORK_DETAIL,
    component: AdminWorkDetailComponent,
  },
];

// export const workDetailChildRoute: ModuleWithProviders = RouterModule.forChild(CHILD_ROUTE);
