/**
 * Created by matth on 2/3/2017.
 */

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
export const APP_ROUTES: Routes = [
  { path: '',   redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', loadChildren:  './+menu/menu.module#MenuRouteModule' },
  { path: 'note', loadChildren:  './+note/note.module#NoteRouteModule' },
  { path: 'profile', loadChildren:  './+profile/profile.module#ProfileRouteModule' },
  { path: 'work', loadChildren:  './+work/work.module#WorkRouteModule' },
  { path: 'admin', loadChildren:  './+admin/admin.module#AdminRouteModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
