/**
 * Created by matth on 2/19/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunDialComponent } from './sun-dial.component';
import { SunDialDirective } from "./sun-dial.directive";
import { FormsModule } from "@angular/forms";
import { SunDialChildDirective } from './sun-dial-child.directive';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SunDialComponent, SunDialDirective, SunDialChildDirective],
  exports: [SunDialComponent, SunDialDirective],
})
export class SunDialModule {
}
