import { ArticleHeaderComponent } from '../article-header/article-header.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SunDialModule } from "../sun-dial/sun-dial.module";
import { WorkPostService } from '../+work-post/work-post.service';
import { routing } from "./work.route";
import { WorkComponent } from "./work.component";
import { WorkPostComponent } from "../+work-post/work-post.component";
import { AngularFireClientModule } from "app/firebase/af.module";


@NgModule({
  imports: [
    CommonModule,
    routing,
    SunDialModule,
    AngularFireClientModule,
  ],
  providers: [WorkPostService],
  declarations: [WorkComponent, ArticleHeaderComponent, WorkPostComponent],
  exports: [WorkComponent],
})
export class WorkRouteModule {
}
