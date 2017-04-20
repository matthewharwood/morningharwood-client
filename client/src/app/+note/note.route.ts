import { RouterModule, Routes } from "@angular/router";
import { NoteComponent } from "./note.component";
import { ModuleWithProviders } from "@angular/core";
/**
 * Created by matth on 4/19/2017.
 */


export const routerConfig: Routes = [{
  path: '',
  component: NoteComponent,
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routerConfig);
