import { Component, OnInit } from '@angular/core';
import { TodoistService } from './mh-remote/todoist.service';
import {Todoist} from './mh-remote/todoist'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!22211111';
  errorMessage: string;
  todoist: Array<Todoist.Item>;
  constructor(private todoService: TodoistService){}

  ngOnInit() { this.getTodoist(); }
  getTodoist() {
    this.todoService.getItems()
      .subscribe(
        todoist => this.todoist = todoist.items,
        error =>  this.errorMessage = <any>error);
  }
}
