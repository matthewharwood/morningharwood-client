import { ArticleHeaderComponent } from '../article-header/article-header.component';
import { AngularFireModule } from 'angularfire2';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from "@angular/core";
import { NgModule } from '@angular/core';
import { SunDialModule } from "../sun-dial/sun-dial.module";
import { Routes, RouterModule } from "@angular/router";
import { WorkComponent } from "./work.component";
import { WorkPostComponent } from '../+work-post/work-post.component';
import { WorkPostService } from '../+work-post/work-post.service';


export const routerConfig: Routes = [{
  path: '',
  component: WorkComponent
}, {
  path: ':id',
  component: WorkPostComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);
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
