/**
 * Created by matth on 2/3/2017.
 */
import { Component } from "@angular/core";
import { data, RunningHeader } from '../running-head/running-head.content';
import { Observable } from 'rxjs/Rx';
import { bogo } from '../_handies/sorting';

import 'rxjs/add/operator/map';

@Component({
  selector: 'menu-route',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class MenuComponent {
  private data:RunningHeader = bogo(data);

  createCounter() {
    return Observable
      .interval(1000)
      .take(data.length - 1)
      .map(i => {
        return this.data[i];
      })
  }
}

