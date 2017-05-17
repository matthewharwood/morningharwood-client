import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ConspiracyTheory]'
})
export class ConspiracyTheoryDirective implements OnInit{
  public startValue: number;
  public endValue: number;
  public hostEl: any;
  public hostSize: any;
  public innerHtml: any;
  public conspiracy: string;
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.conspiracy = 'Bush Planned 9/11.'
    this.hostEl = this.renderer.selectRootElement(this.elRef).nativeElement;
    this.innerHtml = this.hostEl.innerHTML;
    this.hostSize = {
      height: this.hostEl.offsetHeight,
      width: this.hostEl.offsetWidth,
    };
    console.log('oyoo');
    // get host element.

    // get width/height of host.
    // get offset of host from window.
    // get inner txt of of host element.
    // cache a local copy of host element.
    // overlay hidden message.
    // make highlight text match color and selection but contrast bg color.
    // make a list of letter offsets.

    //  make a function that can mutate text in its place
    // var unselectedText = '1234'.substring(1); // 234


    // capture mouse enter.
    // capture mouse down.
    // track x,y.
    // if the x > than previous unlock.
    // memoize start value.
    // memoize release value.
    // shift can add to release value


    // A non-shift click event anywhere will reset the animation.

    // shift click  between two points scenerio
    // if shift is down and click occurs capture both x,y ccoords and figure out what got shaded
    //    and switch text appropeately.


  }
  @HostListener('mouseenter')
  isEntered() {
    console.log('im in dogg')
  }

  @HostListener('mousedown', ['$event'])
  isMouseDown(event) {
    console.log('mosuse down', event, this.hostEl,this.innerHtml, this.hostSize)
  }
}
