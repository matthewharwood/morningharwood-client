import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, SunDial } from './app.interface';
import { Observable } from 'rxjs/Observable';
import { getPartOfDay } from './_handies/date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  private keyboard: Observable<boolean>;
  public partOfDay$: Observable<SunDial>;
  public setKonami: boolean;


  constructor(private store: Store<AppState>, ) {
    this.partOfDay$ = store.select('sunDial');
    this.keyboard = store.select('keyboard');
  }

  ngOnInit() {
    this.store.dispatch({ type: getPartOfDay(new Date())});
    this.keyboard.subscribe(x => this.setKonami = x);
  }
}
