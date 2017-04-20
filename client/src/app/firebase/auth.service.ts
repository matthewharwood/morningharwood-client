/**
 * Created by matth on 4/19/2017.
 */
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthService implements CanActivate{
  canActivate() {
    console.log('yup');
    return true;
  }
}
