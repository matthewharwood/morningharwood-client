/**
 * Created by matth on 2/25/2017.
 */
import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SunDialComponent implements OnInit {
  public data: PartsOfDay[];
  @Input() partOfDay: any;

  constructor() {}

  ngOnInit() {
    this.data = (<any>Object).values(PartsOfDayEnum);
  }
}
