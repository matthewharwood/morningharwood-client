import { Component, Input } from '@angular/core';
import { Item } from './item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['item.component.scss'],
})
export class ItemComponent  {
  @Input() data:Item;
  @Input() index:number;
}
