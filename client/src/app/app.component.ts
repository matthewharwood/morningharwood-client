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
  private counter: Observable<boolean>;
  public setKonami: boolean;
  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  ngOnInit() {
    this.counter.subscribe(x => this.setKonami = x)
  }
}
