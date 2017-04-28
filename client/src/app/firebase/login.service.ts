/**
 * Created by matth on 4/20/2017.
 */

import { Injectable } from "@angular/core";
import { AngularFire } from "angularfire2";
import { myFirebaseAuthConfig } from "./auth";
import { Router } from "@angular/router";

@Injectable()
export class AF {
  constructor(public af: AngularFire, private router: Router) {}
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.af.auth.login(myFirebaseAuthConfig);
  }
  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.logout();
  }
}
