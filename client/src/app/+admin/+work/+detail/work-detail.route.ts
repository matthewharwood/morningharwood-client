/**
 * Created by matth on 7/10/2017.
 */

import { Routes } from '@angular/router';
import { AdminWorkDetailComponent } from './work-detail.component';
import { RouteDict } from '../../admin.remote';

export const workDetailChildRoute: Routes = [
  {
    path: RouteDict.WORK_DETAIL,
    component: AdminWorkDetailComponent,
  },
  {
    path: `${RouteDict.WORK_DETAIL}/:id`,
    component: AdminWorkDetailComponent,
  },
];
