/**
 * Created by matth on 2/3/2017.
 */
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'note-route',
  templateUrl: 'note.component.html',
  styleUrls: ['note.component.scss'],
})
export class NoteComponent implements OnInit{

  ngOnInit() {
    console.log('such wow from +profile')
  }
}

