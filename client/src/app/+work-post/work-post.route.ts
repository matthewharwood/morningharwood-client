/**
 * Created by matty on 5/2/17.
 */
import { Routes } from "@angular/router";

import { WorkPostComponent } from './work-post.component';
import { WorkPostResolve } from './work.resolve';
import { WorkPostUIResolve } from './work-post-ui.resolve';


export const routerConfig: Routes = [{
  path: ':slug',
  component: WorkPostComponent,
  resolve: {
    remote: WorkPostResolve,
    // ui: WorkPostUIResolve,
  }
}];

