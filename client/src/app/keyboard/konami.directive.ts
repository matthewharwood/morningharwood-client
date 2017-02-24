import {Directive, HostListener, Input, OnInit} from '@angular/core';
import {KeyCodes} from './key-codes.enum';
import {Observable} from "rxjs";
import 'rxjs/add/operator/every';

@Directive({
  selector: '[mhKonami]'
})
export class KonamiDirective implements OnInit {
  @Input('mhKonami') konamiCode: Array<string>|boolean;
  public setClass:boolean = false;

  ngOnInit() {

    const konami = [
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

    const keys = Observable.fromEvent(document, 'keyup');
    const buffered: any = keys.bufferCount(11, 1);
    buffered.subscribe(x => {
      x.every((y, i) => y.keyCode === konami[i])
    });

    console.debug("⬆', '⬆', '⬇', '⬇', '⬅', '➡', '⬅', '➡', 'b', 'a', 'enter', 'https://en.wikipedia.org/wiki/Konami_Code'");
  }
}
