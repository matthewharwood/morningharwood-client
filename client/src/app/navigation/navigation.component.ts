import { Component, ChangeDetectionStrategy } from '@angular/core';
import { data, Navigation } from './navigation.content';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  public data:Navigation = data;
}
