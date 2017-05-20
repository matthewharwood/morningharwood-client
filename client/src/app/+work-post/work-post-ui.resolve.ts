/**
 * Created by matty on 5/20/17.
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class WorkPostUIResolve implements Resolve<any> {

  constructor() {

  }

  resolve(route: ActivatedRouteSnapshot): any {
    // then replace dynamic with this.someService.getData(route.params.id)
    return '';
  }
}
