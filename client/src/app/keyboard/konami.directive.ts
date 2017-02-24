import {Directive, OnInit} from '@angular/core';
import {KeyCodes} from './key-codes.enum';
import {Observable} from "rxjs";
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT } from '../_handies/sdk';
import {AppState} from '../app.interface';

@Directive({
  selector: '[mhKonami]'
})
export class KonamiDirective implements OnInit {
  constructor(private store: Store<AppState>){}
  ngOnInit() {

    const konami:Array<KeyCodes> = [
      KeyCodes.UP_ARROW,
      KeyCodes.UP_ARROW,
      KeyCodes.DOWN_ARROW,
      KeyCodes.DOWN_ARROW,
      KeyCodes.LEFT_ARROW,
      KeyCodes.RIGHT_ARROW,
      KeyCodes.LEFT_ARROW,
      KeyCodes.RIGHT_ARROW,
      KeyCodes.KEY_B,
      KeyCodes.KEY_A,
      KeyCodes.ENTER,
    ];

    const keys:Observable<KeyboardEvent>  = Observable.fromEvent(document, 'keyup');
    const buffered = keys.bufferCount(11, 1);
    buffered.subscribe(
      buf => {
        buf.every((e, i) =>  e.keyCode === konami[i])
            ? this.store.dispatch({ type: INCREMENT })
            : this.store.dispatch({ type: DECREMENT });
      }
    );


    console.debug("⬆', '⬆', '⬇', '⬇', '⬅', '➡', '⬅', '➡', 'b', 'a', 'enter', 'https://en.wikipedia.org/wiki/Konami_Code'");
  }
}
