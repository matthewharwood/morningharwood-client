/**
 * Created by matth on 2/3/2017.
 */
/** TODO(ADD Auth) **/
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { POST_TABLE } from './work.content';
import { ActivatedRoute } from '@angular/router';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';
// import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'work-route',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorkComponent implements OnInit {
  public posts = POST_TABLE.data;
  public works$: any;
  private _af: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.works$ = this.route.snapshot.data.remote;
    console.log(this.works$);
  }
}

