/**
 * Created by matth on 2/25/2017.
 */
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, SunDial } from '../app.interface';
import { Observable } from 'rxjs';
import { PartsOfDay } from '../_handies/date'


@Component({
  selector: 'sun-dial',
  templateUrl: 'sun-dial.component.html',
  styleUrls: ['sun-dial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SunDialComponent implements OnInit {
  private partOfDay: Observable<SunDial>;
  public activeInputFieldIndex: SunDial;
  public partOfDayLength: number[];

  constructor(private store: Store<AppState>) {
    this.partOfDay = store.select('sunDial');
  }

  ngOnInit() {
    this.partOfDay.subscribe(x => {
      this.activeInputFieldIndex = x;
    });

    this.setLength();

  }

  setLength(){
    const partLength = Object.keys(PartsOfDay).length/2;
    this.partOfDayLength = new Array((partLength)? partLength : partLength + 1);
  }
}
