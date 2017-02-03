import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MhRemoteModule } from './mh-remote/mh-remote.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MhRemoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
