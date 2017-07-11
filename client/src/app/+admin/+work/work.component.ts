/**
 * Created by matth on 7/9/2017.
 */


import { Component, OnInit } from '@angular/core';
import { EndPointService } from '../../api/endpoint.service';
import * as Routes from 'morningharwood-shared';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'admin-work',
  templateUrl: 'work.component.html',
  styleUrls: [ 'work.component.scss' ],
})
export class AdminWorkComponent implements OnInit {
  public works$: Observable<any>;

  constructor(private endPointService_: EndPointService) {

  }

  public ngOnInit() {
    this.endPointService_.fetch(Routes.WORKS).subscribe(work => {
      this.works$ = work;
    });
  }
}
