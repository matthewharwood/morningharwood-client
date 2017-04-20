import { ArticleHeaderComponent } from '../article-header/article-header.component';
import { AngularFireModule } from 'angularfire2';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SunDialModule } from "../sun-dial/sun-dial.module";
import { WorkPostService } from '../+work-post/work-post.service';
import { routing } from "./work.route";
import { WorkComponent } from "./work.component";
import { WorkPostComponent } from "../+work-post/work-post.component";

export const firebaseConfig = {
  apiKey: "AIzaSyDWDyl4nEvLwZ1S_KghmwrRQ3EXhN62-Yo",
  authDomain: "morningharwood-server.firebaseapp.com",
  databaseURL: "https://morningharwood-server.firebaseio.com",
  projectId: "morningharwood-server",
  storageBucket: "morningharwood-server.appspot.com",
  messagingSenderId: "1093581813386",
};
@NgModule({
  imports: [
    CommonModule,
    routing,
    SunDialModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [WorkPostService],
  declarations: [WorkComponent, ArticleHeaderComponent, WorkPostComponent],
  exports: [WorkComponent],
})
export class WorkRouteModule {
}
