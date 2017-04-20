import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from "./profile.component";
import { routing } from "./profile.route";


@NgModule({
  imports: [CommonModule, routing],
  providers: [],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
})
export class ProfileRouteModule { }
