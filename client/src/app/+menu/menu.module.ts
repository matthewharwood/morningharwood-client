import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { NavigationModule } from '../navigation/navigation.module';
import { RunningHeadModule } from '../running-head/running-head.module';
import { BonerModule } from '../boner/boner.module';
import { FolioModule } from '../folio/folio.module';
import { routing } from "./menu.route";



@NgModule({
  imports: [
    BonerModule,
    CommonModule,
    FolioModule,
    NavigationModule,
    RunningHeadModule,
    routing,
  ],
  providers: [],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuRouteModule {
}
