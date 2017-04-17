/**
 * Created by matth on 2/25/2017.
 */
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, SunDial } from '../app.interface';
import { Observable } from 'rxjs';
import { PartsOfDay, PartsOfDayEnum } from '../_handies/date'

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
@Component({
  selector: 'sun-dial',
  templateUrl: 'sun-dial.component.html',
  styleUrls: ['sun-dial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SunDialComponent implements OnInit {
  private partOfDay: Observable<SunDial>;
  public activeIndex: any;
  public data: PartsOfDay[];

  constructor(private store: Store<AppState>) {
    this.partOfDay = store.select('sunDial');
  }

  ngOnInit() {
    this.data = (<any>Object).values(PartsOfDayEnum);

  }


  static mapTSEnumToArray(enumerableObj:any):Array<number>{
    const partLength = Object.keys(enumerableObj).length/2;
    return new Array((partLength)? partLength : partLength + 1);
  }
}
