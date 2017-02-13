import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MhCanvasDirective} from './mh-splash-bg/mh-canvas.directive';


const APP_ROUTES: Routes = [
  { path: 'about', loadChildren:  './+about/about.module#AboutRouteModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  declarations: [
    AppComponent,
    MhCanvasDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
