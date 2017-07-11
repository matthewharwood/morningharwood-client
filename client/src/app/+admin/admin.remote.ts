/**
 * Created by matty on 4/28/17.
 */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';


interface IRouteDict {
  DEFAULT: string,
  LOGIN: string,
  DASHBOARD: string,
  WORK: string,
  WORK_DETAIL: string,
  SIGN_UP: string
}

const ROOT_PATH: string = 'admin';

export const RouteDict: IRouteDict = {
  DEFAULT: '',
  LOGIN: 'login',
  DASHBOARD: 'dashboard',
  WORK: 'work',
  WORK_DETAIL: 'detail',
  SIGN_UP: 'signup',
};

export type RouteDict = (typeof RouteDict)[keyof typeof RouteDict];

export function getRootPath(): string {
  return ROOT_PATH;
}

export function getRouteDict(): IRouteDict {
  return RouteDict;
}

@Injectable()
export class RemoteAdmin implements Resolve<IRouteDict> {

  resolve(): IRouteDict {
    return RouteDict;
  }

  static getName(): string {
    return 'resolve';
  }
}
