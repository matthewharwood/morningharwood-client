import { Component, OnInit } from '@angular/core';
import { data, Navigation } from './navigation.content';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public data:Navigation = data;

  constructor() { }

  ngOnInit() {
  }

}
