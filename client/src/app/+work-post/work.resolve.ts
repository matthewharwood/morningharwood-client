/**
 * Created by matty on 4/30/17.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { POST_TABLE } from './work-post.content';
@Injectable()
export class WorkPostResolve implements Resolve<any> {
  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot): any {
    return POST_TABLE.data.filter(post => {
      return post.slug === route.params.id;
    });
  }
}