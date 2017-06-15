import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../app.interface';
import { getPartOfDay } from '../_handies/date';


@Injectable()
export class SunDialResolve implements Resolve<any> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot): any {
    this.store.dispatch({ type: getPartOfDay(new Date())});
    return Observable.of(this.store.select('sunDial'));
  }
}
