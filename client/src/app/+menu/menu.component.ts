/**
 * Created by matth on 2/3/2017.
 */
import { Component, OnInit, HostBinding  } from "@angular/core";
import { data, RunningHeader, Item } from '../running-head/running-head.content';
import { Observable } from "rxjs";

import { bogo } from '../_handies/sorting';
import { pulseData$ } from '../_handies/observable';



/**
 * @ngModule MenuRouteModule
 * @whatItDoes Orchestrates all the components inside the Menu Routes component.
 * @example <menu-route></menu-route>
 */

@Component({
  selector: 'menu-route',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class MenuComponent implements OnInit {
  private data: RunningHeader;
  public data$: Observable<Item>;

  ngOnInit() {
    this.data = bogo(data);
    this.data$ = pulseData$(this.data, 'name');
  }
}

