/**
 * Created by matth on 2/25/2017.
 */
import { Directive, OnInit, Input, OnChanges } from '@angular/core';
import { getPartOfDay, PartsOfDay } from '../_handies/date';
import { Store } from '@ngrx/store';
import { AppState } from '../app.interface';

//TODO(mharwood) Refactor PartsOfDay to map PartsOfDay.get(this.currentPartOfDay).
//TODO(mharwood) Make this directive called sunDialParent.
/**
 * @Directive sunDial
 * @whatItDoes onInit calculates time of day and dispatches a "type of day" to the Store<AppState>.
 * @example <someComponent [sunDial]="someModel"></someComponent>
 */
@Directive({
  selector: '[sunDial]'
})
export class SunDialDirective implements OnInit, OnChanges {
  private currentPartOfDay: PartsOfDay;
  @Input() sunDial: any;

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    // this.currentPartOfDay = getPartOfDay(new Date());
    // this.store.dispatch({ type: this.currentPartOfDay });
  }

  ngOnChanges(changes: any){
    console.log(changes, 'changes');
  }
}
