/**
 * Created by matth on 7/10/2017.
 */

import { Routes } from '@angular/router';
import { AdminWorkComponent } from './work.component';
import { RouteDict } from '../admin.remote';
import { workDetailChildRoute } from './+detail/work-detail.route';
import { AdminWorkDetailComponent } from './+detail/work-detail.component';


export const workDetailRoute: Routes = [
  {
    path: RouteDict.WORK,
    component: AdminWorkComponent,
  },
  {
    path: RouteDict.WORK_DETAIL,
    component: AdminWorkDetailComponent,
  },
  {
    path: `${RouteDict.WORK_DETAIL}/:id`,
    component: AdminWorkDetailComponent,
  },
];

