/**
 * Created by matth on 2/24/2017.
 */
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SunDial } from '../app.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'work-post',
  templateUrl: 'work-post.component.html',
  styleUrls: ['work-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkPostComponent {
  public partOfDay$: Observable<SunDial>;
  public obs$;

  constructor(private route: ActivatedRoute) {
    this.partOfDay$ = this.route.snapshot.data.ui;
    this.obs$ = this.route.snapshot.data.remote;
  }
}

