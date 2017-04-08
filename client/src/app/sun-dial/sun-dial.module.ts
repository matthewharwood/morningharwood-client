/**
 * Created by matth on 2/19/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunDialComponent } from './sun-dial.component';
import { SunDialDirective } from "./sun-dial.directive";
import { FormsModule } from "@angular/forms";
import { SunDialChildDirective } from './sun-dial-child.directive';

/**
 *  @whatItDoes Detects the time of day and offers a set of directive and components to fetch,hook and override the
 *  selected time of day.
 *  @imagine That you can use the Time of day to change the UI. If it's daytime and your website is sepia color scheme
 *  if it was nightt ime than it has a dark theme.
 *  @example <input sunDialChild>
 *
 *  @ngModule()
 *  imports: [
 *   SunDialModule
 *  ]
 */
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SunDialComponent, SunDialDirective, SunDialChildDirective],
  exports: [SunDialComponent, SunDialDirective],
})
export class SunDialModule {
}
