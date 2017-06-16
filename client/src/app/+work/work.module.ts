import { ArticleHeaderComponent } from '../article-header/article-header.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WorkPostService } from '../+work-post/work-post.service';
import { routing } from './work.route';
import { WorkComponent } from './work.component';
import { WorkPostComponent } from '../+work-post/work-post.component';
import { AngularFireClientModule } from 'app/firebase/af.module';
import { WorkPostResolve } from '../+work-post/work.resolve';
import { WorkPostUIResolve } from '../+work-post/work-post-ui.resolve';
import { MhPicModule } from '../mh-pic/mh-pic.module';


@NgModule({
  imports: [
    CommonModule,
    routing,
    AngularFireClientModule,
    MhPicModule,
  ],
  providers: [WorkPostService, WorkPostResolve, WorkPostUIResolve],
  declarations: [WorkComponent, ArticleHeaderComponent, WorkPostComponent],
  exports: [WorkComponent],
})
export class WorkRouteModule {
}
