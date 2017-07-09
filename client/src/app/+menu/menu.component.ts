/**
 * Created by matth on 2/3/2017.
 */
import { Component, OnInit, ChangeDetectionStrategy  } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { data, RunningHeader, Item } from '../running-head/running-head.content';
import { bogo } from '../_handies/sorting';
import { pulseData$ } from '../_handies/observable';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';


/**
 * @ngModule MenuRouteModule
 * @whatItDoes Orchestrates all the components inside the Menu Routes component.
 * @example <menu-route></menu-route>
 */
@Component({
  selector: 'menu-route',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('goodmorning', [
      state('void', style({
        'width': '0',
        'transform': 'rotate(0)',
        'transform-origin': '0 0'
      })),
      state('harwood', style({
        'width': '580px',
        'transform': 'rotate(-30deg)',
        'transform-origin': '0 0'
      })),
      transition('void => *', animate(2000, keyframes([
        style({
          'width': '0',
          'transform': 'rotate(0)',
          'transform-origin': '0 0'
        }),
        style({
          'width': '380px',
          'transform': 'rotate(0)',
          'transform-origin': '0 0'
        }),
        style({
          'width': '580px',
          'transform': 'rotate(-30deg)',
          'transform-origin': '0 0'
        })
      ]))),
      transition('void => *', animate('2.5s 0s cubic-bezier(0.455, 0.03, 0.515, 0.955)'))
    ])
  ]
})
export class MenuComponent implements OnInit {
  private data: RunningHeader;
  public data$: Observable<Item>;
  constructor(){}
  ngOnInit() {

    this.data = bogo(data);
    this.data$ = pulseData$(this.data, 'name');
  }
}

