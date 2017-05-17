import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from "./profile.component";
import { routing } from "./profile.route";
import { ConspiracyTheoryModule } from '../conspiracy-theory/conspiracy-theory.module';
import { ConspiracyTheoryComponent } from '../conspiracy-theory/conspiracy-theory.component';


@NgModule({
  imports: [CommonModule, routing, ConspiracyTheoryModule],
  providers: [],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
})
export class ProfileRouteModule { }
