/**
 * Created by matth on 7/8/2017.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class EndPointService {
  constructor(private _http:Http){}

  public fetch(slug:string):Observable<any> {
    console.log(slug);
    return this._http.get(`http://localhost:8000/api/${slug}`)
      .map(res => res.json())
  }
}
