import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFire } from "angularfire2";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {


  constructor(private af: AngularFire, private router: Router) {

  }

  canActivate(
  ) {

    return this.af.auth

    // http://stackoverflow.com/questions/39991355/angular2-firebase-angularfire2-route-guard-and-how-to-deal-with-subscription
    // Observables returned by canActivate have to complete, so take the
    // first emitted value from the auth observable.

      .first()

      // Use mergeMap to project the values emitted from the inner
      // observables created using Observable.fromPromise and
      // Observable.of. (If you weren't making the call to
      // sendEmailVerification, you could just use the map operator
      // and would return a boolean.)

      .mergeMap((user) => {

        if (user && user.auth) {
          if (!user.auth.emailVerified) {
              return Observable.fromPromise(user.auth
                .sendEmailVerification()
                .then(() => {
                  return false;
                }) as Promise<any>
            );
          }
          return Observable.of(true);
        } else {
          return Observable.of(false);
        }
      });
  }
}
