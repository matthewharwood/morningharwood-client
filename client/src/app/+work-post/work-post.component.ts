/**
 * Created by matth on 2/24/2017.
 */
import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { AppState, SunDial } from '../app.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'work-post',
  templateUrl: 'work-post.component.html',
  styleUrls: ['work-post.component.scss'],
})
export class WorkPostComponent implements OnInit {
  public partOfDay: Observable<SunDial>;
  public obs$;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {

  }

  ngOnInit() {
    this.partOfDay = this.store.select('sunDial');
    this.obs$ = this.route.snapshot.data.remote;
  }
}

