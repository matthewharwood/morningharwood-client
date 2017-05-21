/**
 * Created by matty on 5/20/17.
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.interface';
import { Observable } from 'rxjs/Observable';
import { getPartOfDay } from '../_handies/date';

@Injectable()
export class WorkPostUIResolve implements Resolve<any> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot): any {
    // TODO(matth) then replace dynamic with this.someService.getData(route.params.id)

    this.store.dispatch({ type: getPartOfDay(new Date())});
    return Observable.of(this.store.select('sunDial'));
  }
}
