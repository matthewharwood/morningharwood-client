import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { keyboardReducer, sunDialReducer } from './_handies/sdk';
import { MhCanvasDirective } from './mh-splash-bg/mh-canvas.directive';
import { KonamiDirective } from './keyboard/konami.directive'
import { routing } from "./app.route";


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
export class AppModule { }
