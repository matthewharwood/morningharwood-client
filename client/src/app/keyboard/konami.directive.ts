import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { KeyCodes } from './key-codes.enum';
import { Observable, ReplaySubject } from "rxjs";

@Directive({
  selector: '[mhKonami]'
})
export class KonamiDirective implements OnInit {
  private subject:ReplaySubject<KeyboardEvent>;
  @Input('mhKonami') konamiCode: Array<string>;

  constructor() {
    this.subject = new ReplaySubject(10);
  }

  ngOnInit() {

    this.subject.subscribe({
      next: (v) => console.log('observerA: ' + v.keyCode)
    });
      
    let obj = Observable.fromEvent(document, 'keyup');
    obj.subscribe(this.subject);
    console.debug("⬆', '⬆', '⬇', '⬇', '⬅', '➡', '⬅', '➡', 'b', 'a', 'enter', 'https://en.wikipedia.org/wiki/Konami_Code'");
  }
  //
  // @HostListener('document:keyup', ['$event']) onKeypress(event: KeyboardEvent) {
  //
  //
  //   const buffer = [
  //     KeyCodes.UP_ARROW,
  //     KeyCodes.UP_ARROW,
  //     KeyCodes.DOWN_ARROW,
  //     KeyCodes.DOWN_ARROW,
  //     KeyCodes.LEFT_ARROW,
  //     KeyCodes.RIGHT_ARROW,
  //     KeyCodes.LEFT_ARROW,
  //     KeyCodes.RIGHT_ARROW,
  //     KeyCodes.KEY_B,
  //     KeyCodes.KEY_A,
  //     KeyCodes.ENTER
  //   ];
  //   //
  //   // let observable = Observable.from([event]);
  //   // // console.log(event, this.konamiCode);
  //   // observable.subscribe(this.subject);
  // }
}
