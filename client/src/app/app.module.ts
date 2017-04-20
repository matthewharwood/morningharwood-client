import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { keyboardReducer, sunDialReducer } from './_handies/sdk';
import { Meta } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { MhCanvasDirective } from './mh-splash-bg/mh-canvas.directive';
import { KonamiDirective } from './keyboard/konami.directive'


const APP_ROUTES: Routes = [
  { path: '',   redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', loadChildren:  './+menu/menu.module#MenuRouteModule' },
  { path: 'note', loadChildren:  './+note/note.module#NoteRouteModule' },
  { path: 'profile', loadChildren:  './+profile/profile.module#ProfileRouteModule' },
  { path: 'work', loadChildren:  './+work/work.module#WorkRouteModule' },
  { path: 'admin', loadChildren:  './+admin/admin.module#AdminRouteModule' }
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
    StoreModule.provideStore({keyboard: keyboardReducer, sunDial: sunDialReducer }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  constructor(private metaService: Meta) {}

  ngOnInit() {
    this.metaService.addTags([
      { name: 'twitter:title', content: 'Good Morning Harwood' },
      { property: 'og:title', content: 'Good Morning Harwood' }
    ]);
  }
}
