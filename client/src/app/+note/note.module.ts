import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from "./note.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routerConfig: Routes = [{
  path: '',
  component: NoteComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);

@NgModule({
  imports: [CommonModule, routing],
  providers: [],
  declarations: [NoteComponent],
  exports: [NoteComponent],
})
export class NoteRouteModule { }
