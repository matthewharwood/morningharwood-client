import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Item } from './item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  @Input() data: Item;
  @Input() index: number;
}
