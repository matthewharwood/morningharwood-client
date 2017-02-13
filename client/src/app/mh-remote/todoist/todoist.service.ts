import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Todoist} from './todoist'


/**
 *  @USAGE
 *
 *  @ngModule()
 *  imports: [
 *    MhRemoteModule
 *  ]
 *
 *  @component()
 *  export class TodoistComponent(){
 *    errorMessage: string;
 *    todoist: Array<Todoist.Item>;
 *    constructor(private todoService: TodoistService){}
 *
 *     ngOnInit() { this.getTodoist(); }
 *     getTodoist() {
 *     this.todoService.getItems().subscribe(
 *       todoist => this.todoist = todoist.items,
 *       error =>  this.errorMessage = <any>error);
 *
 *  }
 */
@Injectable()
export class TodoistService {
  private todoistUrl = 'http://localhost:8000/api/v1/todoist';
  constructor(private http: Http) {}

  getItems (): Observable<Todoist.Base> {
    return this.http.get(this.todoistUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
