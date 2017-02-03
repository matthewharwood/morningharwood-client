import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TodoistService } from './todoist.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    TodoistService
  ],
  declarations: []
})
export class MhRemoteModule { }
