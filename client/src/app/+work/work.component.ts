/**
 * Created by matth on 2/3/2017.
 */
import { Component } from "@angular/core";
import { POST_TABLE } from './work.content';

@Component({
  selector: 'work-route',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.scss'],
})
export class WorkComponent {
  public posts = POST_TABLE.data;
}

