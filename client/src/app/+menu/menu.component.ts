/**
 * Created by matth on 2/3/2017.
 */
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'menu-route',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent implements OnInit{
  public title = 'Morning Harwood';
  public subtitle = 'Coming Soon';

  ngOnInit() {
    console.log('such wow from +about')
  }
}

