import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from "./notes.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routerConfig: Routes = [{
  path: '',
  component: NotesComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);

@NgModule({
  imports: [CommonModule, routing],
  providers: [],
  declarations: [NotesComponent],
  exports: [NotesComponent],
})
export class NotesRouteModule { }
