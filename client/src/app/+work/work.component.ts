/**
 * Created by matth on 2/3/2017.
 */
import { Component, OnInit } from "@angular/core";
import { POST_TABLE } from './work.content';
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Component({
  selector: 'work-route',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.scss'],
})
export class WorkComponent implements OnInit{
  public posts = POST_TABLE.data;
  public works: any;
  private _af: any;
  constructor(af: AngularFire) {
    this._af = af;
  }
  ngOnInit() {
    this.works = this._af.database.list('/work');
  }
}

