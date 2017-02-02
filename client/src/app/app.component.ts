import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  people: any;

  constructor(http: Http){
    http.get('http://localhost:8000/api/v1/todoist')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      .subscribe((people) => {
        console.log(people);
        this.people = people;
      });

  }

  ngOnInit() {
    // console.log('noasdf', window['fetch']("http://localhost:8000/api/v1/todoist", {method: 'get'}).then((response) => console.log(response.json())));
  }
}
