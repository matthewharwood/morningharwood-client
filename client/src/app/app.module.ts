import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { keyboardReducer, sunDialReducer } from './_handies/sdk';
import { KonamiDirective } from './keyboard/konami.directive'
import { routing } from "./app.route";
import { MhPicModule } from './mh-pic/mh-pic.module';
import { SunDialModule } from './sun-dial/sun-dial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    KonamiDirective,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MhPicModule,
    SunDialModule,
    routing,
    StoreModule.provideStore({keyboard: keyboardReducer, sunDial: sunDialReducer }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
