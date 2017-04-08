import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  private keyboard: Observable<boolean>;
  public setKonami: boolean;
  constructor(private store: Store<AppState>) {
    this.keyboard = store.select('keyboard');
  }

  ngOnInit() {
    this.keyboard.subscribe(x => this.setKonami = x)
  }
}
