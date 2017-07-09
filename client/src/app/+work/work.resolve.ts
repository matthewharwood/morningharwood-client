/**
 * Created by matty on 5/20/17.
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as Routes from 'morningharwood-shared';
import { EndPointService } from '../api/endpoint.service';


@Injectable()
export class WorkResolve implements Resolve<any> {

  constructor( private endpoint: EndPointService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.endpoint.fetch(Routes.WORKS);
  }
}
