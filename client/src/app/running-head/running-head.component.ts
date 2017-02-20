import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Item } from './running-head.content';
import { Observable } from "rxjs";


@Component({
  selector: 'running-head',
  templateUrl: 'running-head.component.html',
  styleUrls: ['running-head.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RunningHeadComponent {
  @Input() data: Observable<Item>;
}
