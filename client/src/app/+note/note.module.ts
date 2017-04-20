import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from "./note.component";
import { routing } from "./note.route";


@NgModule({
  imports: [CommonModule, routing],
  providers: [],
  declarations: [NoteComponent],
  exports: [NoteComponent],
})
export class NoteRouteModule { }
