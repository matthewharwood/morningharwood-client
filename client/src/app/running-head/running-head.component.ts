import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Item } from './running-head.content';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'running-head',
  templateUrl: 'running-head.component.html',
  styleUrls: ['running-head.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RunningHeadComponent implements OnInit {
  @Input() data: Observable<Item>;
  public letsTalk: any;

  ngOnInit() {
    this.data.subscribe((data) => {
      this.letsTalk = data.name;
    })
  }
}
