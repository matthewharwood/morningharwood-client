import { Directive, HostListener } from '@angular/core';
import { getPartOfDay, PartsOfDay } from '../_handies/date';
import { Store } from '@ngrx/store';
import { AppState } from '../app.interface';

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
