import { ArticleHeaderComponent } from '../article-header/article-header.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SunDialModule } from '../sun-dial/sun-dial.module';
import { WorkPostService } from '../+work-post/work-post.service';
import { routing } from './work.route';
import { WorkComponent } from './work.component';
import { WorkPostComponent } from '../+work-post/work-post.component';
import { AngularFireClientModule } from 'app/firebase/af.module';
import { WorkPostResolve } from '../+work-post/work.resolve';
import { WorkPostUIResolve } from '../+work-post/work-post-ui.resolve';


@NgModule({
  imports: [
    CommonModule,
    routing,
    SunDialModule,
    AngularFireClientModule,
  ],
  providers: [WorkPostService, WorkPostResolve, WorkPostUIResolve],
  declarations: [WorkComponent, ArticleHeaderComponent, WorkPostComponent],
  exports: [WorkComponent],
})
export class WorkRouteModule {
}
