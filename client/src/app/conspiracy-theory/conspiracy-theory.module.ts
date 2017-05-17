import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConspiracyTheoryDirective } from './conspiracy-theory.directive';
import { ConspiracyTheoryComponent } from './conspiracy-theory.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ConspiracyTheoryDirective,
    ConspiracyTheoryComponent,
  ],
  exports: [
    ConspiracyTheoryComponent,
  ]
})
export class ConspiracyTheoryModule {
}
