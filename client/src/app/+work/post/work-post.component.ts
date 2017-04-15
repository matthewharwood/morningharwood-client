/**
 * Created by matth on 2/24/2017.
 */
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState, SunDial } from '../../app.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'work-post',
  templateUrl: 'work-post.component.html',
  styleUrls: ['work-post.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkPostComponent implements OnInit{
  private partOfDay: Observable<SunDial>;
  public activeFilter: any;

  constructor(private store: Store<AppState>) {
    this.partOfDay = store.select('sunDial');
  }

  ngOnInit() {
    this.partOfDay.subscribe(partOfDay => {
      this.activeFilter = WorkPostComponent.setFilterType(partOfDay); // refactor this mutation
    });
  }

  static setFilterType(partOfDay) {
    switch (partOfDay) {
      case 'Morning':
        return {'light-filter': true};
      case 'Afternoon':
        return {'sepia-filter': true};
      case 'Evening':
        return {'dark-filter': true};
      default:
        return {'light-filter': true};
    }
  }
}

