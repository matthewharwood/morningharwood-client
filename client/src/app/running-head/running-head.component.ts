import { Component, OnInit, OnDestroy } from '@angular/core';
import { content,RunningHeader } from './running-head.content';

@Component({
  selector: 'running-head',
  templateUrl: 'running-head.component.html',
  styleUrls: ['running-head.component.scss']
})
export class RunningHeadComponent implements OnInit, OnDestroy {
  private content = content;
  private bogoInterval: number;
  public bogoCount: number = 0;
  public bogoContent: RunningHeader;

  constructor() {}

  ngOnInit() {
    this.bogoContent = this.bogo(this.content);
    this.bogoInterval = this.intervalIndex();
  }

  ngOnDestroy() {
    clearInterval(this.bogoInterval);
  }

  private bogo(v:RunningHeader):RunningHeader {
    for(var j, x, i = v.length; i; j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
  }

  // TODO Refactor interval
  public intervalIndex():number {
    const countIntervals = () => {
      ++this.bogoCount;
      if(this.bogoCount >= this.content.length-1) {
        clearInterval(this.bogoInterval);
      }
    };

    return window.setInterval(countIntervals, 1000);
  }

}
