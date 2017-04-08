import { Directive, HostListener } from '@angular/core';
import { getPartOfDay, PartsOfDay } from '../_handies/date';
import { Store } from '@ngrx/store';
import { AppState } from '../app.interface';

/**
 *  @whatItDoes Take a host and dispatch an event to change part of day.
 *  @example <input sunDialChild>
 *  @USAGE
 *
 *  @ngModule()
 *  imports: [
 *   SunDialModule
 *  ]
 */
@Directive({
  selector: '[sunDialChild]'
})
export class SunDialChildDirective {

  constructor(private store: Store<AppState>){}

  @HostListener('click', ['$event.target'])
  changePartOfDay(evt){
    this.store.dispatch({ type: PartsOfDay[evt.value] });
  }

}
