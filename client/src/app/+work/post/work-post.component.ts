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

  constructor(private store: Store<AppState>) {
    this.partOfDay = store.select('sunDial');
    // (partOfDay | async)?.filterClas
  }

  ngOnInit() {}
}

