/**
 * Created by matth on 2/3/2017.
 */
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'about-route',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
})
export class AboutComponent implements OnInit{

  ngOnInit() {
    console.log('such wow from +about')
  }
}

