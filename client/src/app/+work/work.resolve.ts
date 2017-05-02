/**
 * Created by matty on 4/30/17.
 */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';


@Injectable()
export class WorkPostResolve implements Resolve<string> {

  resolve():string {
   return 'wow'
  }

  static getName(): string {
    return 'resolve';
  }
}