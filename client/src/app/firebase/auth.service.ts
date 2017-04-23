import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AF } from "./login.service";

@Injectable()
export class CanActivateViaAuthGuard implements Resolve<any> {
  constructor(private authService: AF) {}

  resolve() {
    return this.authService.loginWithGoogle()
      .catch(err => err);
  }
}
