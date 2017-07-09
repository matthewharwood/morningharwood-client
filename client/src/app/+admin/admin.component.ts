/**
 * Created by matth on 4/19/2017.
 */
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { getRouteDict, getRootPath } from './admin.remote';
import { ActivatedRoute } from '@angular/router';

/**
 * @ngModule AdminRouteModule
 * @whatItDoes Orchestrates all the components inside the Admin Routes component.
 * @example <admin-route></admin-route>
 */
@Component({
  selector: 'admin-route',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent implements OnInit {
  public adminRoutes: any;

  constructor(private route: ActivatedRoute,) {
  }

  ngOnInit() {

    this.adminRoutes = Object.assign({}, {
      rootPath: getRootPath(),
      routes: Object.keys(getRouteDict()).map(key => key),
    });
  }
}
