import { Directive, OnInit, OnDestroy } from '@angular/core';
import { KeyCodes } from './key-codes.enum';
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';
import { ACTIVATE, DEACTIVATE } from '../_handies/sdk';
import { AppState } from '../app.interface';

@Directive({
  selector: '[mhKonami]'
})
export class KonamiDirective implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    const konami:KeyCodes[] =  [
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
        console.log(buf);
        buf.every((e, i) =>  e.keyCode === konami[i])
            ? this.store.dispatch({ type: ACTIVATE })
            : this.store.dispatch({ type: DEACTIVATE });
      }
    );


    console.debug("⬆', '⬆', '⬇', '⬇', '⬅', '➡', '⬅', '➡', 'b', 'a', 'enter', 'https://en.wikipedia.org/wiki/Konami_Code'");
  }

  ngOnDestroy() {

  }
}
