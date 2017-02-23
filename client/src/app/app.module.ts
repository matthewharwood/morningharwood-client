import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { MhCanvasDirective } from './mh-splash-bg/mh-canvas.directive';
import { KonamiDirective } from './keyboard/konami.directive'


const APP_ROUTES: Routes = [
  { path: '',   redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', loadChildren:  './+menu/menu.module#MenuRouteModule' },
  { path: 'notes', loadChildren:  './+notes/notes.module#NotesRouteModule' },
  { path: 'profile', loadChildren:  './+profile/profile.module#ProfileRouteModule' },
  { path: 'work', loadChildren:  './+work/work.module#WorkRouteModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  declarations: [
    AppComponent,
    MhCanvasDirective,
    KonamiDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
