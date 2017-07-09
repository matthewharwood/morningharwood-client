

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  private _cached: boolean = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  canActivate(
  ) {
    if(this._cached){
      return true;
    } else {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((auth) => {
        this._cached = auth.user.email === 'matthhar12@gmail.com';
        return this._cached;
      }) as Promise<any>;
    }
    // http://stackoverflow.com/questions/39991355/angular2-firebase-angularfire2-route-guard-and-how-to-deal-with-subscription
  }
}

