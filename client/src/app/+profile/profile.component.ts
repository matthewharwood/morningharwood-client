/**
 * Created by matth on 2/3/2017.
 */
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'profile-route',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit{

  ngOnInit() {
    console.log('such wow from +profile')
  }
}

